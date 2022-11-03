import { gqlClient } from "./gqlClient";

export const fetcher = async ({
  token = null,
  auth = null,
  query,
  variables = null,
  apiKey
}) => {
  const response = await gqlClient(token, auth, apiKey).request(query, variables);
  return response;
};