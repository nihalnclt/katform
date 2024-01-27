import { Application } from "express";
import request from "supertest";

import { app } from "../../../../../app";
import { HttpStatus } from "../../../../../core/enums/httpStatus";

const createTestForm = async (app: Application) => {
  const response = await request(app).post("/api/v1/forms/create").send({ formName: "Test Form" });
  return response.body;
};

describe("POST /api/v1/forms/create", () => {
  it("should return an error without request body", async () => {
    return request(app).post("/api/v1/forms/create").send().expect(HttpStatus.BAD_REQUEST);
  });

  it("should return an error without formName", async () => {
    const response = await request(app).post("/api/v1/forms/create").send({});

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"formName" is required',
          }),
        ]),
      })
    );
  });

  it("should return an error with empty formName", async () => {
    const response = await request(app).post("/api/v1/forms/create").send({ formName: "" });

    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: '"formName" is not allowed to be empty',
          }),
        ]),
      })
    );
  });

  it("should create form with valid data", async () => {
    const response = await request(app)
      .post("/api/v1/forms/create")
      .send({ formName: "Test Form" });

    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toEqual(
      expect.objectContaining({
        formName: "Test Form",
        formId: expect.any(String),
        fields: expect.arrayContaining([]),
        id: expect.any(String),
        createdAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/),
        updatedAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/),
      })
    );
  });
});

describe("PATCH /api/v1/forms/update/:formId", () => {
  it("should return an error without request body", async () => {
    return request(app).patch(`/api/v1/forms/update/:formId`).send().expect(HttpStatus.BAD_REQUEST);
  });

  it("should return an error without valid formId", async () => {
    const formId = "AB0";
    const response = await request(app)
      .patch(`/api/v1/forms/update/${formId}`)
      .send({ fields: [] });

    expect(response.statusCode).toBe(HttpStatus.NOT_FOUND);
    expect(response.body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            message: `no forms found with ${formId}`,
          }),
        ]),
      })
    );
  });

  it("should update form with valid data", async () => {
    const form = await createTestForm(app);
    const response = await request(app)
      .patch(`/api/v1/forms/update/${form.formId}`)
      .send({ fields: [] });

    expect(response.statusCode).toBe(HttpStatus.OK);
  });
});
