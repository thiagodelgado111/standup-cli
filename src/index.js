import os from 'os';
import clipboardy from 'clipboardy';
import inquirer from 'inquirer';

export default function (templateConfig) {
  const parseConfigItemToQuestion = ({ name, message, defaultAnswer }) => ({
    type: 'editor',
    name,
    message: message + os.EOL,
    default: defaultAnswer, /* format, parseEmoji, etc. */
  });

  const questions = Object.keys(templateConfig)
    .map(key => parseConfigItemToQuestion(Object.assign({}, templateConfig[key], { name: key })));

  return inquirer
    .prompt(questions)
    .then(answers => clipboardy.write(
      Object.keys(answers).reduce((prev, item) => prev + templateConfig[item].message + os.EOL + answers[item] + os.EOL, '').trim(),
    ))
    .then(() => process.exit(0), error => {
      console.error(error);
      process.exit(1);
    });
}
