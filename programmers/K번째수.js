function solution(array, commands) {
  let answer = [];

  commands.map((i) => {
    answer.push(
      array
        .slice(i[0] - 1, i[1])
        .sort((a, b) => a - b)
        .slice(i[2] - 1, i[2])[0]
    );
  });
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);
