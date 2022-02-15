// find missing number in an sorted array O(logn)
function Missing(array: number[]): number {
  let start = 0; // 0 ,1 ,2, 3 ,4 ,5
  let end = array.length - 1; // 4 ,4 ,4 ,4 ,4 ,4
  while (start <= end) {
    const mid = Math.floor((start + end) / 2); // 2 ,2 ,3 ,3 ,4
    if (array[mid - 1] === mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (start === array.length) return start + 1;
  return start;
}
 