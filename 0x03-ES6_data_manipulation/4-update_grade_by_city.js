export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const newGrade = newGrades.find((item) => item.studentId === student.id);
    const grade = newGrade ? newGrade.grade : 'N/A';
    return {
      ...student,
      grade,
    };
  });
}
