import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["./src/index.tsx"],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["cjs", "esm"],
  minify: true,
  dts: true,
  outDir: "dist",
  watch: false,
});
