function hanoi(n, source, temp, dest) {
  if (n === 1) {
    console.log("Move Disk", n, "from", source, "-->", dest);
    return;
  }
  hanoi(n - 1, source, dest, temp);
  console.log("Move Disk", n, "from", source, "-->", dest);
  hanoi(n - 1, temp, source, dest);
}

function main() {
  const n = parseInt(prompt("Enter the number of disks: "));

  hanoi(n, 'A', 'B', 'C');
}

main();
