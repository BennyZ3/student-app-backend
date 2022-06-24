const app = require("../../app");
const supertest = require("supertest");

describe("returns json data for all students", () => {
  it("returns an object with all strudent", async () => {
    await supertest(app)
      .get("/students")
      .expect(200)
      .then((response) => {
        expect(response.body.students).toBeInstanceOf(Array);
      });
  });

  it("returns an object with a number of students equal to or less than a limit", async () => {
    await supertest(app).get("/students?limit10").expect(200);
  });
});
