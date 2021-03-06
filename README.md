# mock-creator

A simple function that generates mocks for Apollo MockedProvider from a GraphQL Server.

## Usage:

Function signature:
`mockCreator(query: any, variables: any, endpoint: string) => Promise<Mock>`

### Without variables

```typescript
improt {gql} from "graphql-tag";
const SOME_QUERY = gql`
  query {
    hello
  }
`
mockCreator(SOME_QUERY, null, "http://localhost:5000/graphql").then((data) => console.log(data))

/*
console.log:
{
  "request": {
    "query": "query {\n hello\n }\n"
    },
  "result": {
    {
      "data": {
        "hello": "world"
      }
    }
  }
},
*/
```

### With variables

```typescript
improt {gql} from "graphql-tag";
const SOME_QUERY = gql`
  query namedQuery($name: String!) {
    hello(input: $name)
  }
`
mockCreator(SOME_QUERY, {name: "Gonzo"}, "http://localhost:5000/graphql").then((data) => console.log(data))

/*
console.log:
{
  "request": {
    "query": "query {\n hello\n }\n",
    "variables": {"name": "Gonzo"}
    },
  "result": {
    {
      "data": {
        "hello": "Gonzo"
      }
    }
  }
},
*/
```
