function search(arr, n, searchValue) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === searchValue) return i;
  }
  return -1;
}

function main() {
  const n = parseInt(prompt("Enter the number of elements: "));
  const arr = new Array(n);

  console.log("Enter the elements: ");
  for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter element: "));
  }

  const searchValue = parseInt(prompt("Enter the search value: "));
  const index = search(arr, n, searchValue);

  if (index === -1) {
    console.log("Value", searchValue, "not present in the array");
  } else {
    console.log("Value", searchValue, "present at index", index);
  }
}

main();
