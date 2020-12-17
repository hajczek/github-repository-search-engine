export default function() {
  return {
    httpEndpoint: "https://api.github.com/graphql",
    getAuth: () => "Bearer <your-api-token-here>"
  };
}
