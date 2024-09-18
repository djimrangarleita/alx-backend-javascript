const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOSTNAME = 'localhost';
const db = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/students') {
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
      res.end(error.message);
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(PORT, HOSTNAME);

module.exports = app;
