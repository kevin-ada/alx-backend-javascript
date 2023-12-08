export default function getStudentIdsSum(getListStudents) {
  return getListStudents.map((elem) => elem.id).reduce((accum, currentVal) => accum + currentVal);
}
