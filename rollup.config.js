import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";

const config = {
  input: "src/index.ts",
  output: [
    { file: "dist/index.esm.js", format: "esm" },
    { file: "dist/index.cjs.js", format: "cjs" },
  ],
  external: [/@babel\/runtime/, "react", "react-dom", "react/jsx-runtime"],
  plugins: [
    babel({ babelHelpers: "runtime", plugins: ["@babel/plugin-transform-runtime"] }),
    typescript({ tsconfig: "./tsconfig.json" }),
    filesize(),
  ],
};

export default config;
