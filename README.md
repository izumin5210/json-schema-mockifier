# JsonSchemaMockifier
Generate mock object from JSON Schema ([HyperSchema v4](http://json-schema.org/latest/json-schema-hypermedia.html)).

## Installation

```
$ npm install json-schema-mockifier
```

## Usage

```javascript
var schema = require("./spec/fixtures/schema.json");
var mockifier = require("json-schema-mockifier");

var mocks = mockifier.mockify(schema);

console.log(mocks.post);      // mock object of Post resource
/*
  { created_at: '2012-01-01T12:00:00Z',
    id: '01234567-89ab-cdef-0123-456789abcdef',
    body: 'Ah^~ My heart will be hopping^~',
    updated_at: '2012-01-01T12:00:00Z',
    user: {
      id: '01234567-89ab-cdef-0123-456789abcdef',
      name: 'Syaro'
    },
    comments: [
      { created_at: '2012-01-01T12:00:00Z',
        id: '01234567-89ab-cdef-0123-456789abcdef',
        body: 'Is the order a rabbit?',
        updated_at: '2012-01-01T12:00:00Z',
        user: {
          id: '01234567-89ab-cdef-0123-456789abcdef',
          name: 'Syaro'
        }
      }
    ]
  }
*/
```

## LICENSE

JsonSchemaMockifier is licensed under [MIT-license](http://izumin.mit-license.org/2015).
