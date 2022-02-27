import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

const cjs = {
  exports: "named",
  format: "cjs",
  sourcemap: true,
};

const esm = {
  format: "esm",
  sourcemap: true,
};

const getCJS = (override) => ({ ...cjs, ...override });
const getESM = (override) => ({ ...esm, ...override });

const commonPlugins = [
  typescript({ tsconfig: "./tsconfig.json" }),
  babel({
    configFile: require.resolve("./babel.config.js"),
    exclude: ["node_modules/**", "../../node_modules/**"],
    babelHelpers: 'bundled'
  }),
  terser(),
  external(),
];

const configBase = {
  plugins: commonPlugins,
};

const commonConfig = {
  ...configBase,
  input: "./src/index.ts",
  output: [
    getCJS({
      file: packageJson.main,
    }),
    getESM({
      file: packageJson.module,
    }),
  ],
};

const typesConfig = {
  input: "dist/esm/types/index.d.ts",
  output: [{ file: "dist/index.d.ts", format: "esm" }],
  plugins: [dts()],
};

export default [commonConfig, typesConfig];
