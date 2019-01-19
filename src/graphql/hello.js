const { graphql, buildSchema } = require('graphql');

// import {
//   graphql,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString
// } from 'graphql';

// var schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve() {
//           return 'world';
//         }
//       }
//     }
//   })
// });

// var query = '{ hello }';

// graphql(schema, query).then(result => {

//   // Prints
//   // {
//   //   data: { hello: "world" }
//   // }
//   console.log(result);

// });

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const schema2 = buildSchema(`
  type Query {
    pics: [Picture!]
  }
  type Picture {
    id: String
    title: String
    size: String
    data: String
    type: String
    material: String
    measure: String
    price: Int
    link: String
  }
`);

const root = { hello: () => 'Hello world!' };
const root2 = {
  pics: () => [{id: "1"}],
  pic: () => "hello"
};


graphql(schema, '{ hello }', root)
  .then((response) => {
    console.log(response);
});

graphql(schema2,
  `{ pics
    {
      id
    }
  }`,
   root2)
  .then((response) => {
    console.log(response);
});

// TODO: import pics, base64encode pics, add to pic data
const data = require("../server/data/data");
const { pics } = data;
const [first] = pics;