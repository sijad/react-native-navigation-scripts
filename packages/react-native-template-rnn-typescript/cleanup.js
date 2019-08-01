const path = require("path");
const rimraf = require("rimraf");

const projectPath = path.join(__dirname, "..", "..");

const projectFilesToDelete = [".flowconfig", "App.js", "__tests__/App-test.js"];
const templateFilesToDelete = [
  "setup.js",
  "cleanup.js",
  "README.md",
  "LICENSE",
  "templates"
];

const deleteFile = filePath => {
  rimraf.sync(filePath);
};
const deleteProjectFile = fileName =>
  deleteFile(path.join(projectPath, fileName));
const deleteTemplateFile = fileName =>
  deleteFile(path.join(__dirname, fileName));

projectFilesToDelete.forEach(deleteProjectFile);
templateFilesToDelete.forEach(deleteTemplateFile);
