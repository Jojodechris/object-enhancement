// “Write an ES2015 Version”.Same keys and values

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName, 
    };
  }
  
// “Write an ES2015 Version”.Computed Property Names
  const favoriteNumber = 42;

  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!",
  };
//   “Write an ES2015 Version”.Computed Property Names Computed Property Names ES2015
  const iinstructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };
  
//   const instead of var: We use const to declare the constant instructor instead of var. const declares a variable with a value that cannot be reassigned.

// Shorthand method syntax: Instead of using the function keyword to define the methods sayHi and sayBye, we use the shorthand method syntax introduced in ES2015. By omitting the function keyword and using a colon after the method name, we can define methods in a more concise way.

// Template literals: In the sayBye method, we use template literals to include the value of this.firstName within the string. By wrapping the variable inside ${} within the string, we can easily interpolate the value of this.firstName without using concatenation


// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

function generateAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        console.log(noise);
      }
    };
  }
  