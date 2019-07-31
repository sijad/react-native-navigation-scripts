const { runner } = require("hygen");
const Logger = require("hygen/lib/logger");
const path = require("path");
const rimraf = require("rimraf");
const fs = require("fs");

const defaultTemplates = path.join(__dirname, "templates");
const projectPath = path.join(__dirname, "..", "..");

const projectFilesToDelete = [
  ".flowconfig",
  "App.js",
  "__tests__/App-test.js",
  "setup.js",
  "README.md",
  "LICENSE",
  "templates"
];

const appName = require(path.join(projectPath, "app.json")).name;

process.env.HYGEN_OVERWRITE = true;
runner(["v3", "rn60", "--appName", appName], {
  templates: defaultTemplates,
  cwd: projectPath,
  logger: new Logger(console.log.bind(console)),
  createPrompter: () => require("enquirer"),
  exec: (action, body) => {
    const opts = body && body.length > 0 ? { input: body } : {};
    return require("execa").shell(action, opts);
  },
  debug: !!process.env.DEBUG
});

const deleteFile = filePath => {
  rimraf.sync(filePath);
};

const deleteProjectFile = fileName =>
  deleteFile(path.join(projectPath, fileName));

projectFilesToDelete.forEach(deleteProjectFile);
