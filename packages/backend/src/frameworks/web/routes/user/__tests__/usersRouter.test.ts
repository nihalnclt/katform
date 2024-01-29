import request from "supertest";

import { app } from "../../../../../app";
import { HttpStatus } from "../../../../../core/enums/httpStatus";

const testUser = {
  name: "Test User",
  email: "test@gmail.com",
  password: "12345678",
};

describe("POST /api/v1/users/auth/signup", () => {
  it("should return an error without request body", async () => {
    return request(app).post("/api/v1/users/auth/signup").send().expect(HttpStatus.BAD_REQUEST);
  });

  it("should return an error without name", async () => {
    const response = await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ email: testUser.email, password: testUser.password });

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"name" is required',
          }),
        ]),
      })
    );
  });

  it("should return an error without email", async () => {
    const response = await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, password: testUser.password });

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"email" is required',
          }),
        ]),
      })
    );
  });

  it("should return an error without password", async () => {
    const response = await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email });

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"password" is required',
          }),
        ]),
      })
    );
  });

  it("should create new user with valid data", async () => {
    const response = await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email, password: testUser.password });

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body).toEqual(
      expect.objectContaining({
        user: expect.objectContaining({
          name: testUser.name,
          email: testUser.email,
          createdAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/),
          updatedAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/),
          id: expect.any(String),
        }),
        accessToken: expect.any(String),
        refreshToken: expect.any(String),
      })
    );
  });

  it("should return an error with same email address", async () => {
    await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email, password: testUser.password })
      .expect(HttpStatus.OK);
    const user2Response = await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email, password: testUser.password });

    expect(user2Response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(user2Response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: "Email already in use",
          }),
        ]),
      })
    );
  });
});

describe("POST /api/v1/users/auth/login", () => {
  it("should return an error without request body", async () => {
    return request(app).post("/api/v1/users/auth/login").send().expect(HttpStatus.BAD_REQUEST);
  });

  it("should return an error without email", async () => {
    const response = await request(app)
      .post("/api/v1/users/auth/login")
      .send({ name: testUser.name, password: testUser.password });

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"email" is required',
          }),
        ]),
      })
    );
  });

  it("should return an error without password", async () => {
    const response = await request(app)
      .post("/api/v1/users/auth/login")
      .send({ name: testUser.name, email: testUser.email });

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"password" is required',
          }),
        ]),
      })
    );
  });

  it("should return an error with incorrect email", async () => {
    await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email, password: testUser.password })
      .expect(HttpStatus.OK);
    const response = await request(app)
      .post("/api/v1/users/auth/login")
      .send({ email: "wrong@gmail.com", password: testUser.password });

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: "Invalid email or password",
          }),
        ]),
      })
    );
  });

  it("should return an error with incorrect password", async () => {
    await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email, password: testUser.password })
      .expect(HttpStatus.OK);
    const response = await request(app)
      .post("/api/v1/users/auth/login")
      .send({ email: testUser.email, password: "wrong" });

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: "Invalid email or password",
          }),
        ]),
      })
    );
  });

  it("should login with valid credentials", async () => {
    await request(app)
      .post("/api/v1/users/auth/signup")
      .send({ name: testUser.name, email: testUser.email, password: testUser.password })
      .expect(HttpStatus.OK);
    const response = await request(app)
      .post("/api/v1/users/auth/login")
      .send({ email: testUser.email, password: testUser.password });

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body).toEqual(
      expect.objectContaining({
        user: expect.objectContaining({
          name: testUser.name,
          email: testUser.email,
          createdAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/),
          updatedAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/),
          id: expect.any(String),
        }),
        accessToken: expect.any(String),
        refreshToken: expect.any(String),
      })
    );
  });
});
