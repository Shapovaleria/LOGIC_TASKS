class User {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  printName() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name, age, role) {
    super(name, age)
    this.role = role
  }
  printRole() {
    console.log(this.role)
  }
}
