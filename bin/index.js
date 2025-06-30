#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import standupCli from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read default config
const defaultConfigPath = path.join(__dirname, 'default.json');
const defaultTemplateConfig = JSON.parse(fs.readFileSync(defaultConfigPath, 'utf8'));

const [,, standUpTemplateFilePath] = process.argv;
const templateConfig = standUpTemplateFilePath
  ? JSON.parse(fs.readFileSync(path.resolve(standUpTemplateFilePath), 'utf8'))
  : defaultTemplateConfig;

standupCli(templateConfig);
