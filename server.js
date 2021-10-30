const db = require('./db/connection');
const figlet = require('figlet');
const inquirer = require('inquirer');

db.connect(err => {
    if(err)throw err;
    figlet('Track My Staff', function(err, data) {
        if(err) {
            console.log('Uh oh... Something went wrong...');
            console.dir(err);
            return;
        }
    console.log(data)
    });
});