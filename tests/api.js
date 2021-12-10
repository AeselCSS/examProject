const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);

// Test of functionel demand #1 - User should be able to add an account
// note that this test can only run once because it require a username not already present in db
describe("Create account API", () => {
    it("should create new account", (done) => {
      chai
      .request(app)
      .post("/users/create")
      .set("Content-Type", "application/json")
      .send({ 
        username: "admin_test", 
        password: "admin_test", 
        email: "admin@test.com",
        fullName: "admin",
        address: "testingstreet 12",
        zip: "1234",
        userId: 112233
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(200);
        expect(res).to.be.json;
        expect(res.body)
        .to.be.an("object")
        .that.contains.keys(["success", "message"])
        done();
    });
});
});
// Test of functionel demand #4 - User should be able to login
describe("Login API", () => {
  it("should success only if username and password are correct", (done) => {
    chai
      .request(app)
      .post("/users/login")
      .set("Content-Type", "application/json")
      .send({ username: "admin", password: "admin" })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.equal(200);
        expect(res).to.be.json;
        expect(res.body)
          .to.be.an("object")
          .that.includes.all.keys(["username", "password", "email", "fullName", "address", "zip", "userId"]);
        done();
      });
  });
});


