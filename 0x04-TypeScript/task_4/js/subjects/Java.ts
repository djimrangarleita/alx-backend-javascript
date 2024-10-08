/// <reference path='Teacher.ts' />
/// <reference path='Subject.ts' />
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number
  }

  export class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}