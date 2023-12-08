export default function getListStudentIds(getListStudents) {
  if (typeof getListStudents !== 'function') {
    return [];
  }
  const listStudents = getListStudents();
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.map((student) => student.id);
}
