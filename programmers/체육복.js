function solution(n, lost, reserve) {
  let answer = n;
  const realLost = lost.filter((element) => !reserve.includes(element));
  let realReserve = reserve.filter((element) => !lost.includes(element));

  console.log(realLost, realReserve);

  realReserve.forEach((p) => {
    let key;
    if (p !== 1) {
      key = realLost.includes(p - 1)
        ? realLost.indexOf(p - 1)
        : realLost.indexOf(p + 1);
      if (key != -1) {
        realLost.splice(key, 1);
      }
    } else {
      key = realLost.indexOf(p + 1);
      realLost.splice(key, 1);
    }
  });

  return answer - realLost.length;
}
