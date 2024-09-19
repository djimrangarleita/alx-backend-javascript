import path from 'path';
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const db = path.resolve(process.argv[2]);
    res.set('Content-Type', 'text/plain');
    res.write('This is the list of our students');
    readDatabase(db).then((data) => {
      const keys = Object.keys(data).sort();
      for (const key of keys) {
        const list = data[key];
        res.write(`\nNumber of students in ${key}: ${list.length}. List: ${list.join(', ')}`);
      }
      res.status(200).end();
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const db = path.resolve(process.argv[2]);
    const { major } = req.params;
    console.log('Database file path:', db);
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(db).then((data) => {
      const list = data[major];
      res.status(200).send(`List: ${list.join(', ')}`);
    }).catch((error) => {
      res.status(500).send(error.message);
    });
  }
}
