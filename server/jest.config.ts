import { pathsToModuleNameMapper } from "ts-jest";
import type { JestConfigWithTsJest } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

export default jestConfig;

// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig");

// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   verbose: true,
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions),
//   modulePaths: ["<rootDir>"],
// };
