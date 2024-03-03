
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const newPerson = new Person('Ivan', 'Ivanov', 34);

console.log(newPerson);