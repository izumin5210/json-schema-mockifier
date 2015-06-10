import assert from "power-assert";
import parser from "json-schema-parser";

import {mockify} from "../src/mockifier";
import fixture from "./fixtures/schema";

describe("JsonSchemaMockify", () => {
  let mocks, schema, userProps;

  beforeEach(() => {
    mocks = mockify(fixture);
    schema = parser.parse(fixture)
    userProps = schema.properties.user.properties
  });

  it("has keys that equals top level properties of schema", () => {
    assert.deepEqual(Object.keys(mocks), Object.keys(schema.properties))
  });

  it("has the same properties as schema", () => {
    assert.deepEqual(Object.keys(mocks.user), Object.keys(userProps))
  });

  it("has name attribute the same value as example of schema", () => {
    assert(mocks.user.name == userProps.name.example)
  });

  it("has nested properties the same as schema", () => {
    assert.deepEqual(Object.keys(mocks.post.user), Object.keys(userProps))
  });

  it("has the property as array when the type includes \"array\"", () => {
    assert(Array.isArray(mocks.post.comments))
  });
});
