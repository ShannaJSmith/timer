const timeArgs = process.argv.slice(2);

const beep = function(sec) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sec * 1000)
}

const isNum = function(string) {
  const integer = Number.parseInt(string);
  return Number.isInteger(integer);
}

for (const time of timeArgs) {
  if (time < 0) {
    continue;
  }
  if (!isNum(time)) {
    continue;
  }
    beep(time);
}



//OR

// for (const time of timeArgs) {
//   if (time >= 0 && isNum(time)) { 
//     beep(time);
// }
// }

