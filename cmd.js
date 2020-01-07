const inquirer = require('inquirer');
const fs=require('fs')

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?',
      default: 'Alligators, of course!',
    },
    {
      name: 'faveColor',
      message: 'What is your favorite color?',
      default: '#008f68',
    },
  ])
  .then(answers => {
    console.info('Answers:', answers);
  });