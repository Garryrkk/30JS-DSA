function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function main() {
  const terms = parseInt(prompt("Enter number of terms: "));

  for (let i = 0; i <= terms; i++) {
    console.log(fib(i), " ");
  }
}

main();
