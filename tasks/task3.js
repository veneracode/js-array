// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  return people.find(function(item) {
    return item.name === name;
  });
}

const people = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

console.log(findByName(people, 'Jill')); 

module.exports = findByName;
