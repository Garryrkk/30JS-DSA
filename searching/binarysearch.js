function search(arr, n, searchValue) {
  let first = 0;
  let last = n - 1;
  let mid;

  while (first <= last) {
    mid = Math.floor((first + last) / 2);

    if (searchValue < arr[mid]) {
      last = mid - 1; // Search in left half
    } else if (searchValue > arr[mid]) {
      first = mid + 1; // Search in right half
    } else {
      return mid; // searchValue present at index mid
    }
  }

  return -1;
}

function main() {
  const n = parseInt(prompt("Enter the number of elements: "));
  const arr = new Array(n);

  console.log("Enter the elements in sorted order: ");
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
