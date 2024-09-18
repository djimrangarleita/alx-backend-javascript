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
      const { count, groupedByField } = await countStudents(db);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${count}\n`);
      const stream = [];
      for (const key of Object.keys(groupedByField)) {
        const { count, list } = groupedByField[key];
        stream.push(`Number of students in ${key}: ${count}. List: ${list.join(', ')}`);
      }
      res.end(stream.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(PORT, HOSTNAME);

module.exports = app;
