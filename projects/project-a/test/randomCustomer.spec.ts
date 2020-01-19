import { newItemCustomerGet } from "../src/dynamodb-seed/random-customer";
import { expect } from "chai";
import "mocha";

describe("First test", () => {
  it("should create a dynamodb customer item", () => {
    const item = newItemCustomerGet();
    expect(item.id).to.be.a("string");
    expect(item.version).to.be.a("number");
    expect(item.customer).to.be.an("object");
  });
});
