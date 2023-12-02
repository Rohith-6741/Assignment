function bubbleSortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  const input = prompt("Enter a list of numbers separated by commas (e.g., 5,2,9,1,5,6):");
  const inputArray = input.split(',').map(Number);
  const sortedArray = bubbleSortDescending(inputArray);
  console.log("Sorted array in descending order:", sortedArray);
  
  