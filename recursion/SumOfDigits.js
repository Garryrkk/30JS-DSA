function sumDigits(n) {
  if (Math.floor(n / 10) === 0) return n;
  return sumDigits(Math.floor(n / 10)) + (n % 10);
}

function main() {
  const n = parseInt(prompt("Enter a number: "));

  console.log(sumDigits(n));
}

main();
