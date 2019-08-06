const path = require('path');
const fs = require('fs');
const execFileSync = require('child_process').execFileSync;

const projectPath = path.join(__dirname, '..', '..');

const templateFilesToDelete = [
  'setup.js',
  'README.md',
  'LICENSE',
];

const rnnPath = path.join(__dirname, '..', 'rnn-cli', 'lib', 'bin.js');
execFileSync('node', [rnnPath, 'install', 'rnn'], { cwd: projectPath, env: { HYGEN_OVERWRITE: true } });

const deleteFile = filePath => {
  if (!fs.existsSync(filePath)) {
    return;
  }
  fs.unlinkSync(filePath);
};
const deleteTemplateFile = fileName =>
  deleteFile(path.join(__dirname, fileName));

templateFilesToDelete.forEach(deleteTemplateFile);
