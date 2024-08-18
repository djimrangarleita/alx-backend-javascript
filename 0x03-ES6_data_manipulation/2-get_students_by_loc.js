/**
 * Filter list students by city (location)
 * @param {array<object>} listStudents list of students
 * @param {string} city city for filtering
 * @returns {array} filtered objects
 */
export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.location === city);
}
