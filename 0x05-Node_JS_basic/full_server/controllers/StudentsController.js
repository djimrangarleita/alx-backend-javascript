import path from 'path';
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const db = path.resolve(process.argv[2]);
    res.set('Content-Type', 'text/plain');
    readDatabase(db).then((data) => {
      const keys = Object.keys(data).sort();
      res.write('This is the list of our students');
      for (const key of keys) {
        const list = data[key];
        res.write(`\nNumber of students in ${key}: ${list.length}. List: ${list.join(', ')}`);
      }
      res.status(200).send();
    }).catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const db = path.resolve(process.argv[2]);
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(db).then((data) => {
        const list = data[major];
        res.status(200).send(`List: ${list.join(', ')}`);
      }).catch((error) => {
        res.status(500).send(error.message);
      });
    }
  }
}
