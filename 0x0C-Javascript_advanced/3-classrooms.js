function createClassRoom (numbersOfStudents) {
  function studentSeat (seat) {
    return function () {
      return (seat);
    };
  }
  let students = new Array(numbersOfStudents);
  for (let num = 0; num < numbersOfStudents; num++) {
    students[num] = studentSeat(num + 1);
  }
  return (students);
}

let classRoom = createClassRoom(10);
