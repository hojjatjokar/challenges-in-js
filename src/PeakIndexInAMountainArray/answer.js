// recursive
function peakIndexInMountainArray(arr, start = 0, end = arr.length - 1) {
  if (!arr.length) return -1;

  const mid = ((start + end) / 2) | 0;

  if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

  if (arr[mid] < arr[mid - 1]) return peakIndexInMountainArray(arr, start, mid);

  if (arr[mid] < arr[mid + 1]) return peakIndexInMountainArray(arr, mid, end);
}

// iterative
function peak(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = ((start + end) / 2) | 0;

  while (true) {
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] < arr[mid - 1]) {
      end = mid;
    }
    if (arr[mid] < arr[mid + 1]) {
      start = mid;
    }
  }
}
