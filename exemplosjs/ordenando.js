const swap = (array, pos1, pos2) => {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
}

const shuffle = (array, swaps) => {
  for (let i = 0; i < swaps; i++) {
    const pos1 = Math.floor(Math.random() * array.length);
    const pos2 = Math.floor(Math.random() * array.length);
    swap(array, pos1, pos2);
  }
}

const bubble_sort = (array) => {
  const n = array.length;
  let swapped = false;
  
  do {
    swapped = false;
    for (let i = 0; i < n-1; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      }
    }
  } while (swapped);
}

const selection_sort = (array) => {
  const n = array.length;
  
  for (let i = 0; i < n-1; i++) {
    let minIndex = i;
    for (let j = i+1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
}

const quick_sort = (array, start, end) => {
  if (start < end) {
    const pivot = partition(array, start, end);
    quick_sort(array, start, pivot-1);
    quick_sort(array, pivot+1, end);
  }
}

const partition = (array, start, end) => {
  const pivot = array[end];
  let i = start - 1;
  
  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }
  
  swap(array, i+1, end);
  return i+1;
}
