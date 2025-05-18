document.writeln(`<h3>Counting: </h3>`);
let number = 15;
let output1 = "";
for (let i = 1; i <= number; i++) {
  output1 += i;
  if (i !== number) output1 += ", ";
}
document.writeln(output1);

document.writeln(`<h3>Reverse Counting: </h3>`);
let output2 = "";
for (let i = 10; i >= 1; i--) {
  output2 += i;
  if (i > 1) {
    output2 += ", ";
  }
}
document.writeln(output2);

document.writeln("<h3>Even:</h3>");
let evenOutput = "";
for (let i = 0; i <= 20; i += 2) {
  evenOutput += i;
  if (i < 20) {
    evenOutput += ", ";
  }
}
document.writeln(evenOutput);

document.writeln("<h3>Odd:</h3>");
let oddOutput = "";
for (let i = 1; i <= 19; i += 2) {
  oddOutput += i;
  if (i < 19) {
    oddOutput += ", ";
  }
}
document.writeln(oddOutput);

document.writeln("<h3>Series:</h3>");
let seriesOutput = "";
for (let i = 2; i <= 20; i += 2) {
  seriesOutput += i + "k";
  if (i < 20) {
    seriesOutput += ", ";
  }
}
document.writeln(seriesOutput);
