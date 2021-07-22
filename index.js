class Pilha {
  constructor(...args) {
    this.array = [];
    if (args.length) {
      for (let index = 0; index < args.length; index++) {
        const number = args[index];

        // verifying if the number is an integer
        Number.isInteger(number)
          ? this.array.push(number)
          : console.log(`The element '${number}' can not be set!`);
      }
    }
  }

  addValue(number) {
    // verifying if the number is an integer
    Number.isInteger(number)
      ? this.array.push(number)
      : console.log(`The element '${number}' can not be added!`);

    return this.array;
  }

  removeValue() {
    // removing the last element of the array
    this.array.pop();
    return this.array;
  }

  get minValue() {
    // setting the minimum value to be the first term of the array
    // if that doesn't have any, that means that the array is null
    let minValue = this.array[0];
    if (!minValue) {
      return "The stack doesn't have any values! ";
    }
    // getting the minimum value
    for (let index = 0; index < this.array.length; index++) {
      const arrayNumber = this.array[index];

      if (arrayNumber < minValue) {
        minValue = arrayNumber;
      }
    }
    return minValue;
  }
}

// you can create a stack passing only integer numbers
const pilha1 = new Pilha(123, 5, 0, 3, 0.5, "some text");

// you can only add a value if it is a integer number
pilha1.addValue(-23);
pilha1.addValue("some text");
pilha1.addValue(0.5);

// remove the last value of the stack
pilha1.removeValue();

console.log("Pilha 1:", pilha1.array);
console.log("Pilha 1 min value:", pilha1.minValue);

// or not passing any values
const pilha2 = new Pilha();

// add some randoms values
pilha2.addValue(Math.round(Math.random() * 100));
pilha2.addValue(Math.round(Math.random() * 100));
pilha2.addValue(Math.round(Math.random() * 100));

console.log("Pilha 2:", pilha2.array);
console.log("Pilha 2 min value:", pilha2.minValue);
