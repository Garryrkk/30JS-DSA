function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function main() {
  const n = parseInt(prompt("Enter a number greater than or equal to zero: "));

  console.log("Factorial of", n, "is", factorial(n));
}

main();
