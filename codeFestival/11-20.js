// 문제 11번
// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

let s = 0;

for (let i = 1; i <= 100; i++) {
  s += i;
}

console.log(s);

// 문제 12번
// 클래스 문제라 다음에 풀기

// 문제 13번
// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다.
// 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.입출력

// 입력 : 1
// 출력 : 수성

const planets = [
  '수성',
  '금성',
  '지구',
  '화성',
  '목성',
  '토성',
  '천왕성',
  '해왕성',
];

function findPlanetIndex(index) {
  return planets[index - 1];
}

findPlanetIndex(1);

// 문제 14번
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 **3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력**해 주세요.

function multipleNumber(num) {
  const result = num % 3 === 0 ? '짝' : num;
  return result;
}

multipleNumber(1);
multipleNumber(3);

// 문제 15번
// 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

// 만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게
// 해주세요.

// 입출력

// 입력 : 김다정
// 출력 : 안녕하세요. 저는 김다정입니다.

function greeting(name) {
  return `안녕하세요. 저는 ${name}입니다.`;
}
greeting('김다정');

// 문제 16번
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

function reverse(word) {
  const reverseWord = word.split('').reverse().join('');
  return reverseWord;
}
reverse('거꾸로');

// 문제 17번
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

function limitTall(cm) {
  const result = cm >= 150 ? 'YES' : 'NO';
  return result;
}
limitTall(149);
limitTall(168);

// 문제 18번
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.
function testAverage(korean, math, english) {
  const sum = korean + math + english;
  const average = Math.floor(sum / 3);
  return average;
}
testAverage(20, 30, 40);

// 문제 19번
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
function multipleNum(twoNum) {
  const test = twoNum.split(' ');
  const 메소드거듭제곱 = Math.pow(test[0], test[1]);
  const 거듭제곱 = test[0] ** test[1];
}
multipleNum('2 3');

// 문제 20번
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력

// 입력 : 10 2
// 출력 : 5 0
function quotientRemainder(twoNum) {
  const divideNum = twoNum.split(' ');
  const quotient = divideNum[0] / divideNum[1];
  const remainder = Math.floor(divideNum[0] % divideNum[1]);

  return `${quotient} ${remainder}`;
}
quotientRemainder('10 2');
