// N * N의 크기를 가진 체스판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같습니다.

// 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
// 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
// 조작의 기회는 딱 한 번 주어진다.
// 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
// ( 예시: UDDLLRRDRR, RRRRR )
// 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안에 적힌 숫자를 획득할 수 있다.
// 방문한 곳을 다시 방문해도 숫자를 획득할 수 있다.
// 보드 밖을 나간 말은 OUT 이다.
// 칸 안의 숫자는 0 또는 1이다.
// ( 단, 좌표 왼쪽 상단(0, 0)은 항상 0이다. )
// 획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
// 보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서
// 획득한 숫자의 합을 구하는 함수를 작성하세요.

function solution(board, operation) {
  const first = operation[0];
  let count = 0;
  let x = 0;
  let y = 0;

  if (first === 'U' || first === 'L') return 'out';

  for (let i = 0; i < operation.length; i++) {
    if (operation[i] === 'D') y += 1;
    if (operation[i] === 'U') y -= 1;
    if (operation[i] === 'R') x += 1;
    if (operation[i] === 'L') x -= 1;

    if (y < 0 || y >= board.length || x < 0 || x >= board.length) return 'out';

    count += board[y][x];
  }

  return count;
}

const board1 = [
  [0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 1, 0, 1],
];
const board2 = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 0],
];

const solution1 = solution(board1, 'RRRLLDU');
const solution2 = solution(board2, 'DDRRUULDDR');

solution1;
solution2;
