const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./"; // Either absolute or relative path. If relative it's resolved to current working directory.
paths = tsConfig.compilerOptions.paths;
for (let path in paths) {
  paths[path][0] = paths[path][0].replace("src", "dist").replace(".ts", ".js");
}
console.log(paths);
tsConfigPaths.register({
  baseUrl,
  paths
});
