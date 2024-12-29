function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}

function main() {
  const x = parseFloat(prompt("Enter value for x: "));
  const n = parseInt(prompt("Enter value for n: "));

  console.log(x, "^", n, "=", power(x, n));
}

main();
