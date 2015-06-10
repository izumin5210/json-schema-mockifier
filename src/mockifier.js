import parser from "json-schema-parser"
import pointer from "json-pointer"

export function mockify(json) {
  let schema = parser.parse(json);
  let mocks = {};
  Object.keys(json.properties).forEach((key) => {
    mocks[key] = extractExamples(json.properties[key]);
  });
  return mocks;
}

function extractExamples(subschema) {
  let mock = {};
  Object.keys(subschema.properties).forEach((key) => {
    let prop = subschema.properties[key];
    if (prop.type.indexOf("object") != -1) {
      mock[key] = extractExamples(prop);
    } else if (prop.type.indexOf("array") != -1) {
      mock[key] = [extractExamples(prop.items)];
    } else {
      mock[key] = prop.example;
    }
  });
  return mock;
}
