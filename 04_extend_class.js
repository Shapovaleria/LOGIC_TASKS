class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  print() {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
  }
}

class Admin extends User {
  constructor(firstName, lastName, age, role) {
    super(firstName, lastName, age)
    this.role = role
  }
  print() {
    super.print()
    console.log(`Role: ${this.role}`)
  }
}

let admin = new Admin('Sarah', 'Connor', '52', 'administrator')
admin.print()