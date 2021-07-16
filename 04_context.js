function calc() {
  return this.a + this.b;
}

let calcWithContext = calc.bind({a: 3, b: 4});
calcWithContext();
