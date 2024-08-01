interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 35,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 27,
  location: 'ACME',
};

const studentsList: Array<Student> = [student1, student2];

const printRowSeparator = () => console.log('_'.repeat(45));

const printRow = (student: Student) => {
  console.log(`| ${student.firstName} | ${student.lastName} | ${student.age} | ${student.location} |`);
  printRowSeparator();
}

printRowSeparator();
console.log(`| First name | Last name | Age | Location |`)
printRowSeparator();

studentsList.forEach(student => printRow(student));
