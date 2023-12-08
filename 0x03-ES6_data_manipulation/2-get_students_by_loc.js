export default getStudentsByLocation(getStudentsByLocation, city){
    if (!Array.isArray(getStudentsByLocation)) {
        return [];
    }
    return getStudentsByLocation.filter((student) => student.location === city);


}