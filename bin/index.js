#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const defaultTemplateConfig = require('./default.json');

const cli = require('../build');

const [,, standUpTemplateFilePath] = process.argv;
const templateConfig = standUpTemplateFilePath
  ? JSON.parse(fs.readFileSync(path.resolve(standUpTemplateFilePath), 'utf8'))
  : defaultTemplateConfig;

cli(templateConfig);
