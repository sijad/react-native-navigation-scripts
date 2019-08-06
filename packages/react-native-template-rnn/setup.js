const path = require('path');
const fs = require('fs');

const projectPath = path.join(__dirname, '..', '..');

const templateFilesToDelete = [
  'setup.js',
  'README.md',
  'LICENSE',
];

const deleteFile = filePath => {
  if (!fs.existsSync(filePath)) {
    return;
  }
  fs.unlinkSync(filePath);
};
const deleteTemplateFile = fileName =>
  deleteFile(path.join(__dirname, fileName));

templateFilesToDelete.forEach(deleteTemplateFile);
