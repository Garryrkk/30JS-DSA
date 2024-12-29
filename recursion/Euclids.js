function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

function main() {
  const a = parseInt(prompt("Enter value for a: "));
  const b = parseInt(prompt("Enter value for b: "));

  console.log("GCD of", a, "and", b, "is", GCD(a, b));
}

main();
