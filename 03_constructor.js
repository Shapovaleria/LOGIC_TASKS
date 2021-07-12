function User (name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;

  this.print = function () {
    return `Name: ${this.name}, surname: ${this.surname}, age: ${this.age}.`
  }
}
