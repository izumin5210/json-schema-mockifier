import parser from "json-schema-parser"
import pointer from "json-pointer"

export function mockify(json) {
  let schema = parser.parse(json);
  let mocks = {};
  Object.keys(json.properties).forEach((key) => {
    mocks[key] = {};
    Object.keys(json.properties[key].properties).forEach((prop) => {
      mocks[key][prop] = json.properties[key].properties[prop].example;
    });
  });
  return mocks;
}
