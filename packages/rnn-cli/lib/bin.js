#!/usr/bin/env node
const { runner } = require('hygen');
const Logger = require('hygen/lib/logger');
const path = require('path');
const fs = require('fs');

const defaultTemplates = path.join(__dirname, '..', 'templates');
const projectPath = path.join(__dirname, '..', '..', '..');

const isTs = fs.existsSync(path.join(projectPath, 'tsconfig.json'));

runner(process.argv.slice(2).concat(['--ts', isTs ? '1' : '0']), {
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
