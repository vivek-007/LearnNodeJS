console.log('Starting app.js');

// node & 3rd party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// user defined modules
const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command: ' + command + '\n');
console.log('Process' + process.argv + '\n');
console.log('Yargs' + argv + '\n');

if (command === 'add') {
    // console.log('Adding a new note');
    var note = notes.addNote(argv.title, argv.body);
    if(note === undefined) {
      console.log('Note already exists, please provide a new name');
    } else {
      console.log(note.title, ' is succesfully created');
      console.log('-----------------------------------');
      console.log(`Title: ${note.title}` + '\n' + `Body: ${note.body}`);
      console.log('-----------------------------------');
    }
} else if (command === 'list') {
    // console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    // console.log('Reading note');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    // console.log('Removing note');
    console.log('-----------------------------------');
    notes.removeNote(argv.title) ? console.log(`${argv.title} was removed`) : console.log(`${argv.title} not found`);
    console.log('-----------------------------------');
} else {
    console.log('Command not recognized');
}

// var user = os.userInfo();
// console.log(_.isString(true));
// console.log(_.isString('Vivek'));
// var fileteredArray = _.uniq(['Vivek', 1, 'Vivek', 1, 2, 3, 4, 5]);
// console.log(fileteredArray);
// var res = notes.add(47,47);
// console.log(res);
// fs.appendFile('greetings', `Hello ${user.username}! You are ${notes.age}` + '\n');
// console.log(module);
