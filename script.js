let name = prompt("What is your name?");

const firstLetter = name.charAt(0);
let message;

if (firstLetter === "j" || firstLetter === "J") {
  message = `Goodbye ${name}`;
} else {
  message = `Hello ${name}`;
}

console.log(message);