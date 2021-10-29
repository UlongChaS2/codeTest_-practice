// 배열과 특정한 정수를 받아 이진탐색 알고리즘으로 배열안의 정수의 index값을 찾아라

function solution(arr, targetValue) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === targetValue) return mid;
    arr[mid] < targetValue ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
}

const arr = [1, 4, 6, 2, 10, 3, 5, 8, 9, 7];

const solution1 = solution(arr, 3);
const solution2 = solution(arr, 7);

solution1;
solution2;
