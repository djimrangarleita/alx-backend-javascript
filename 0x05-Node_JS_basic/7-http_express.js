const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const db = process.argv[2] || 'database.csv';

app.get('/students', async (_, res) => {
  res.set('Content-Type', 'text/plain');
  try {
    const { count, groupedByField } = await countStudents(db);
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${count}\n`);
    // const stream = [];
    for (const key of Object.keys(groupedByField)) {
      const { count, list } = groupedByField[key];
      res.write(`Number of students in ${key}: ${count}. List: ${list.join(', ')}\n`);
    }
    res.send();
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
