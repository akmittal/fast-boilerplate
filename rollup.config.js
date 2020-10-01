import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";
import html from "@open-wc/rollup-plugin-html";
import process from "process";

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: "node_modules/@webcomponents", dest: "build-modern/node_modules" },
    { src: "images", dest: "build-modern" },
    { src: "data", dest: "build-modern" },
    // { src: 'index.html', dest: 'build-modern' },
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: "src/components/app.ts",
  output: {
    dir: "build-modern/",
    format: "es",
  },
  plugins: [
    typescript(),

    copy(copyConfig),
    resolve(),
    html({
      name: 'index.html',
      inject: false,
      template( {bundle}) {
        // console.log({temp})
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${bundle.entrypoints.map(
              e => `<script type="module" src="${e.importPath}"></script>`,
            )}
    
            <name-tag></name-tag>
</body>
</html>
        `}
    }),
  ],
  preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== "development") {
  config.plugins.push(terser());
}

export default config;
