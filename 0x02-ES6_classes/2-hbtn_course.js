export default class HolbertonCourse {
  constructor(name, length, students) {
    this.length = length;
    this.name = name;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      const studentType = students.every((student) => typeof student === 'string');
      if (studentType === false) {
        throw TypeError('Student name must be a string');
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
