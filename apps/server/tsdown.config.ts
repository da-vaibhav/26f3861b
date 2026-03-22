import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "./src/index.ts",
  format: "esm",
  outDir: "./dist",
  clean: true,
  noExternal: [/@26f3861b-5297-4e7c-92fa-6d4e397ff7fe\/.*/],
});
