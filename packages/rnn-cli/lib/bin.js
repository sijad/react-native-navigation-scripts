#!/usr/bin/env node
const { runner } = require('hygen');
const Logger = require('hygen/lib/logger');
const path = require('path');
const fs = require('fs');

const defaultTemplates = path.join(__dirname, '..', 'templates');
const projectPath = path.join(__dirname, '..', '..', '..');

const isTs = fs.existsSync(path.join(projectPath, 'tsconfig.json'));
const appName = require(path.join(projectPath, 'app.json')).name;
const args = process.argv.slice(2).concat(['--appName', appName, '--ts', isTs ? '1' : '0']);

runner(args, {
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
