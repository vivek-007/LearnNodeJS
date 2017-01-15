var obj = {
  name: 'Vivek',
  age: 25
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Vivek", "age": 25}';
var personObj = JSON.parse(personString);
console.log(typeof personObj);
console.log(personObj);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var obj = JSON.parse(noteString);
console.log(obj.title);
