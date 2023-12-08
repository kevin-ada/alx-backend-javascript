export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const students = getListStudents.filter((student) => student.location === city);
  const studentsId = students.map((student) => student.id);
  const newStudents = getListStudents.map((student) => {
    const studentCopy = student;
    if (studentsId.includes(student.id)) {
      const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
      studentCopy.grade = studentGrade[0] ? studentGrade[0].grade : 'N/A';
    }
    return studentCopy;
  });
  return newStudents;
}
