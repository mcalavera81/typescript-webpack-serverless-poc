import "mocha"
const request = require("supertest");
const expect = require("chai").expect;
import { getSlsOfflinePort } from "../support/getSlsOfflinePort";

describe("get customer", () => {
  it("ok", async function it() {

    console.log("Pepeeeeeeeeee")
    const id = ""
    const response = await request(`http://localhost:${getSlsOfflinePort()}`).get(`/customers/{id}`).expect(200)

    const { body } = response

    console.log(response)

  });
});
