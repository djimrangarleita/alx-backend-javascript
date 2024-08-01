interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [x: string]: any,
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);


interface Directors extends Teacher {
  numberOfReports: number,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName.substring(0, 1)}. ${lastName}`;
console.log(printTeacher('John', 'Doe'));

interface IStudent {
  workOnHomework(): string,

  displayName(): string
}

interface StudentConstructor {
  new (firstName: string, lastName: string): IStudent,
}

class StudentClass implements IStudent {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
