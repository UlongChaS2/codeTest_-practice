// 문제 1번
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

let nums = [100, 200, 300, 400, 500];

const newNums = nums.splice(0, 2);
// or
nums.pop();
nums.pop();

// 문제 2번
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);

// 출력: [200, 100, 10000, 300]
// 첫번째 인자는 중간에 넣고 싶은 index값과 두번째 인자는 넣고 나서 삭제하고 싶은 index 수, 세번째는 넣고 싶은 element

// 문제 3번
var arr = [100, 200, 300];
console.log(typeof arr);

// arr의 타입은 object이다.

// 문제 4번
// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

// 1)  입력 : a =1,   출력 : number
// 2)  입력 : a = 2.22,   출력 : boolean
// 3)  입력 : a = 'p',   출력 : string
// 4)  입력 : a = [1, 2, 3],   출력 : object

// 답: 2

// 문제 5번
// 다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);

// 답: 16

// 문제 6번
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// 답: 2

// 문제 7번
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// 답: 3, 5

// 문제 8번
// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

// var d = {
//     'height':180,
//     'weight':78,
//     'weight':84,
//     'temperature':36,
//     'eyesight':1
// };

// console.log(d['weight']);

// 답: 84

// 문제 9번
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// 답: var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`
// 답: var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
// 문자열에 concat을 해도 문자열로 쌓이기 때문에 인자로 문자열이면 ''을 사용 변수면 그래도 적어 중간중간에 ,넣어 표기한다.

// console.log(result);

// 출력: 2019/04/26 11:34:27

// 문제 10번
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
// 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.
// **은비를 위해 프로그램을 작성해 주세요.**

// **입력**
// 5

// **출력**
//     *
//    ***
//   *****
//  *******
// *********

const star = '*';
const space = ' ';
const height = 5;

for (let i = 0; i < height; i++) {
  let result = '';

  for (let j = 0; j < height + (height - 1); j++) {
    if (j <= height - 1 + i && j >= height - 1 - i) {
      result += star;
    } else {
      result += space;
    }
  }
  console.log(result);
}
