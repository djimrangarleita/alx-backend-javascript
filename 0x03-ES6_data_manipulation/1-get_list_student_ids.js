/**
 * Return ids of students in the list passed as arg
 * @param {array} listStudents List of students from '0-get_list_students'
 * @returns {array<number>} An array of ids
 */
export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.map((student) => student.id);
}
