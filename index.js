class Pilha {
  constructor(...args) {
    this.array = [];
    min·i·mum;
    if (args.length) {
      for (let index = 0; index < args.length; index++) {
        const element = args[index];
        this.array.push(element);
      }
    }
  }

  addValue(number) {
    this.array.push(number);
    return this.array;
  }

  removeValue() {
    this.array.pop();
    return this.array;
  }

  get minValue() {
    // setting the min value to be the first term of the array
    // if that doesn't have any, that means that the array is null
    let minValue = this.array[0];
    if (!minValue) {
      return "The stack doesn't have any values! ";
    }

    for (let index = 0; index < this.array.length; index++) {
      const arrayNumber = this.array[index];

      if (arrayNumber < minValue) {
        minValue = arrayNumber;
      }
    }
    return minValue;
  }
}

// you can create a stack passing the values that you want
const pilha1 = new Pilha(1, 5, 0, 3);

// or not passing any values
const pilha2 = new Pilha();

// add some randoms values
pilha2.addValue(Math.round(Math.random() * 100));
pilha2.addValue(Math.round(Math.random() * 100));
pilha2.addValue(Math.round(Math.random() * 100));

// remove the last value of the stack
pilha1.removeValue();

console.log("Pilha 1:", pilha1.array);
console.log("Pilha 1 min value:", pilha1.minValue);

console.log("Pilha 2:", pilha2.array);
console.log("Pilha 2 min value:", pilha2.minValue);
