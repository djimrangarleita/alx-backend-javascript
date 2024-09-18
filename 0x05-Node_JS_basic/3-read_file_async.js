const fs = require('fs').promises;

const readAndParse = (data) => {
  const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');
  lines.shift();
  return lines.map((line) => {
    const details = line.split(',');
    return {
      firstname: details[0],
      lastname: details[1],
      age: parseInt(details[2], 10),
      field: details[3],
    };
  });
};

const groupByField = (students) => {
  const studentsPerField = {};
  students.forEach((student) => {
    if (!studentsPerField[student.field]) {
      studentsPerField[student.field] = { count: 0, list: [] };
    }
    studentsPerField[student.field].count += 1;
    studentsPerField[student.field].list.push(student.firstname);
  });

  return studentsPerField;
};

const countStudents = async (path) => {
  let data;
  try {
    data = await fs.readFile(path, 'utf8');
  } catch (error) {
    throw Error('Cannot load the database');
  }
  const students = readAndParse(data);
  const groupedByField = groupByField(students);
  // console.log(`Number of students: ${students.length}`);
  for (const key of Object.keys(groupedByField)) {
    const { count, list } = groupedByField[key];
    // console.log(`Number of students in ${key}: ${count}. List: ${list.join(', ')}`);
  }
  return { count: students.length, groupedByField };
};

module.exports = countStudents;
