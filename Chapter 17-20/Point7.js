let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt(`Welcome to PAK bakery.What do you want to order sir/ma'am:`);

let found = false;

for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}
if (found) {
  alert(userInput + ` is available.`);
} else {
  alert(`We are sorry ${userInput} is not available in PAK bakery`);
}