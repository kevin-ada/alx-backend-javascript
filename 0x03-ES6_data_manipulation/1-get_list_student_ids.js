export default function getListStudentIds(getListStudents) {
  if (typeof getListStudents !== 'function') {
    return [];
  }
  return getListStudents.map((student) => student.id);
}
