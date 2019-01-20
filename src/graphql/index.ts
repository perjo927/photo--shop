import { buildSchema, graphql } from "graphql";
import data from "../server/data/db";

const schema = buildSchema(`
  type Query {
    pics: [Picture]
    picture(id: String): Picture 
  }
  
  type Picture {
    id: String
    title: String
    size: String
    path: String
    type: String
    material: String
    measure: String
    price: Float
    link: String
  }
`);

const { pics } = data;

const root = {
  pics: () => pics,
  picture: (args: any) => {
    return pics.filter(pic => pic.id === args.id)[0];
  }
};

export const getData = (query: string): any => {
  return graphql(schema, query, root);
};
