let output = "";

for (let i = 5; i <= 100; i += 5) {
    if (i > 5) {
        output += ", ";
    }
    output += i;
}
document.writeln(output);