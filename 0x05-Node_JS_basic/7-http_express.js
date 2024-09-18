const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const db = process.argv[2];

app.get('/students', async (_, res) => {
  res.set('Content-Type', 'text/plain');
  try {
    res.write('This is the list of our students\n');
    const { count, groupedByField } = await countStudents(db);
    res.write(`Number of students: ${count}`);
    for (const key of Object.keys(groupedByField)) {
      const { count, list } = groupedByField[key];
      res.write(`\nNumber of students in ${key}: ${count}. List: ${list.join(', ')}`);
    }
    res.end();
  } catch (error) {
    res.send(error.message);
  }
});

app.get('/', (_, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(PORT);

module.exports = app;
