function solution(answers) {
  let answer = [];
  let countArr = [];
  let rule = [5, 8, 10];

  let person = {
    0: [1, 2, 3, 4, 5],
    1: [2, 1, 2, 3, 2, 4, 2, 5],
    2: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  for (let i = 0; i < rule.length; i++) {
    countArr.push(
      answers.filter((numb, index) => numb === person[i][index % rule[i]])
        .length
    );
  }

  let maxNumb = Math.max.apply(null, countArr);

  countArr.forEach((countNumb, i) => {
    countNumb === maxNumb && answer.push(i + 1);
  });

  return answer;
}

const answers1 = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];

solution(answers2);
