import { GraphQLClient } from "graphql-request";

interface Request {
  query: string;
  variables: Record<string, object | string | number>;
  preview?: boolean;
}

export function request({ query, variables, preview }: Request) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
}