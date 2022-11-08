interface AuthFetchOptions {
  endpoint: string,
  fetchParams: { headers: { "Content-Type": string, "x-access-token": string } }
}

interface UnauthFetchOptions {
  endpoint: string,
  fetchParams: { headers: { "Content-Type": string } }
}

// Query fetch properties
export const getAuthProperties = (endpoint: string, token: string): AuthFetchOptions => {
  return {
    endpoint: endpoint,
    fetchParams: {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `Bearer ${token}`,
      },
    }
  }
};

export const getUnauthProperties = (endpoint: string): UnauthFetchOptions => {
  return {
    endpoint: endpoint,
    fetchParams: {
      headers: {
        "Content-Type": "application/json",
      },
    }
  }
};