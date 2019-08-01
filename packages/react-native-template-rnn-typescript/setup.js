const { runner } = require('hygen');
const Logger = require('hygen/lib/logger');
const path = require('path');

const defaultTemplates = path.join(__dirname, 'templates');
const projectPath = path.join(__dirname, '..', '..');

const appName = require(path.join(projectPath, 'app.json')).name;

process.env.HYGEN_OVERWRITE = true;
runner(['v3', 'rn60', '--appName', appName], {
  templates: defaultTemplates,
  cwd: projectPath,
  logger: new Logger(console.log.bind(console)),
  createPrompter: () => require('enquirer'),
  exec: (action, body) => {
    const opts = body && body.length > 0 ? { input: body } : {};
    return require('execa').shell(action, opts);
  },
  debug: !!process.env.DEBUG,
});
