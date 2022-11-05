import { MAINNET_API_URL } from "./constants";
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: MAINNET_API_URL,
  documents: ["src/**/*.tsx"],
  watch: true,
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-query"],
      config: {
        fetcher: "graphql-request"
      }
    },
  },
};

export default config;
