var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//  function that sorts the list of students by name,
//  then age if the names are the same
students.sort(function(a,b) {
  //  sort string ascending
  //  if the name is further down the alphabet
  if (a.name < b.name)
    //  move the student down
    return -1;
  //  if the name is higher up the alphabet
  if (a.name > b.name)
    //  move the student up
    return 1;
  //  if the names are the same
  if (a.name === b.name){
    //  sort by age
    return b.age - a.age;
    }
  return 0;
});

console.log(students);