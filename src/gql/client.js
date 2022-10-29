import { GraphQLClient } from "graphql-request";

export const gqlClient = (token, auth, apiKey = null) => {
    const client = new GraphQLClient(getBackendEndpoint(), {
      credentials: "same-origin",
      headers: {
        authorization: `Bearer ${token}`,
        apiKey: `${apiKey}`,
      },
    });
    return client
  }