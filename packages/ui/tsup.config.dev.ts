import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["./src/index.tsx"],
  splitting: false,
  sourcemap: true,
  clean: false,
  format: ["cjs", "esm"],
  minify: false,
  dts: true,
  outDir: "dist",
  watch: true,
});
