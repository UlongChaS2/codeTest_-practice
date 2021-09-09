function solution(participant, completion) {
  const countPerson = participant.reduce((obj, person) => {
    obj[person] = obj[person] ? obj[person] + 1 : 1;
    return obj;
  }, {});
  // reduce는 새로운 배열을 주기에 새로운 변수에 담아 사용해야함
  // obj에 participant의 요소인 키이름이 있는지 확인후 없으면 false로 1이 주어지고 있으면 true로 +1이 된다.

  completion.forEach((finshed) => {
    if (countPerson[finshed]) {
      countPerson[finshed] -= 1;
    }
    if (countPerson[finshed] === 0) {
      delete countPerson[finshed];
    }
  });
  // completion을 반복문 주체로 하여 countPerson과 비교하게끔 해야함
  
  return Object.keys(countPerson)[0];
}

const participant1 = ['mislav', 'stanko', 'mislav', 'ana'];
const completion1 = ['stanko', 'ana', 'mislav'];

const participant2 = ['leo', 'kiki', 'eden'];
const completion2 = ['eden', 'kiki'];

const participant3 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion3 = ['josipa', 'filipa', 'marina', 'nikola'];

solution(participant1, completion1);
