function toBinary(n) {
  if (n === 0) return;
  toBinary(Math.floor(n / 2));
  console.log(n % 2);
}

function convertBase(n, base) {
  if (n === 0) return;
  convertBase(Math.floor(n / base), base);

  const remainder = n % base;
  if (remainder < 10) {
    console.log(remainder);
  } else {
    console.log(String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)));
  }
}

function main() {
  const n = parseInt(prompt("Enter a positive decimal number: "));

  console.log("Binary form: ");
  toBinary(n);
  console.log();

  console.log("Binary form (using convertBase): ");
  convertBase(n, 2);
  console.log();

  console.log("Octal form: ");
  convertBase(n, 8);
  console.log();

  console.log("Hexadecimal form: ");
  convertBase(n, 16);
  console.log();
}

main();
