import { request } from "graphql-request";

declare interface Mock {
  request: { query: any; variables?: any };
  result: { errors?: any[]; data?: any };
}

const mockCreator = async (query: any, variables: any, endpoint: string) => {
  const response = await request(endpoint, query, variables);
  const mock: Mock = {
    request: {
      query,
      variables,
    },
    result: response,
  };
  return mock;
};

export default mockCreator;
