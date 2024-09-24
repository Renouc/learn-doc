import ts from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import nodeResolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

// __dirname
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({});
