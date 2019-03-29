import uniqueNum from './unique';

var resultingNums = [];
for (let i = 0; i < 10; i++) {
  const num = uniqueNum();
  if (!resultingNums.includes(num)) {
    resultingNums.push(num);
  }
  console.log(num);
}
