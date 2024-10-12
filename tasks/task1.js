function filterAdults(people) {
  const adultUsers = people.filter(function(element) {
    return element.age >= 18;
  });
  return adultUsers;
}

const people = [
  { name: "John", age: 21 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 19 },
  { name: "Jill", age: 18 },
  { name: "Jack", age: 23 },
];

console.log(filterAdults(people)); 