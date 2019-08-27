setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// let spinnerArr = ["|", "/", "-", "\\"];

// const spinner = (arr) => {
//   let t = 100;
//   arr.push("\n");
//   for(let i = 0; i < spinnerArr.length; i++) {
//     t += 200;
//     setTimeout(() => {
//       process.stdout.write("\r" + spinnerArr[i]);
//     }, t)
//   }
// }

// spinner(spinnerArr);