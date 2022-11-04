import { TESTNET_API_URL } from "./src/config/constants";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: TESTNET_API_URL,
  documents: [
    "src/graphql/queries/*.graphql",
    "src/graphql/mutations/*.graphql",
    "src/graphql/fragments/*.graphql",
  ],
  generates: {
    "src/generated/types.ts": {
      plugins: [
        "typescript", 
        "typescript-operations", 
        "typescript-react-query"
      ],
      config: {
        fetcher: "fetch"
      }
    }
  }
};

export default config;
