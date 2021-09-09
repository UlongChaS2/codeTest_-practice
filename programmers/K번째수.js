function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const newArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    // sort()의 콜백함수로 정렬 순서를 정의하는 함수를 생략하면 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다.
    console.log(newArr);
    answer.push(newArr[commands[i][2] - 1]);
  }
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);
