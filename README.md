# JsonSchemaMockify
Generate mock object from JSON Schema ([HyperSchema v4](http://json-schema.org/latest/json-schema-hypermedia.html)).

## Installation

```
$ npm install json-schema-mockify
```

## Usage

```javascript
var schema = require("./spec/fixtures/schema.json");
var mockify = require("json-schema-mockify");

var mocks = mockify(schema);

console.log(mocks.post);      // mock object of Post resource
```

## LICENSE

JsonSchemaMockify is licensed under [MIT-license](http://izumin.mit-license.org/2015).
