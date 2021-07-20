function calc() {
  return this.a + this.b;
}

calc.call({a: 3, b: 4});

