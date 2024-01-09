import request from "supertest";

import { app } from "../../../../../app";

it("should return 200 success", async () => {
    return request(app).get("/api/v1/users").send().expect(200);
    
});
