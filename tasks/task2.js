const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  return students
    .filter(function(element) {
      return element.score > 80;
    })
    .map(function(element) {
      return element.name;
    });
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  return students.filter(function(student) {
    return student.name !== name;
  });
}

console.log(getTopScoringStudents(students)); 
console.log(getAverageAge(students));         
console.log(addStudent(students, { name: "Charlie", age: 19, score: 80 })); 
console.log(removeStudentByName(students, "Jill")); 

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
