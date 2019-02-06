//bubble sort

const bubbleSort = arr => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = bubbleSort(arr);

result;

//insertion sort

const insertionSort = arr => {
  const l = arr.length;
  let j, temp;

  for (let i = 1; i < l; i++) {
    j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  return arr;
};

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = insertionSort(arr);

result;
