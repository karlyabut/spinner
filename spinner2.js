let spinnerArr = ["|", "/", "-", "\\"];

const spinner = (arr) => {
  let t = 100;
  arr.push("\n");
  for(let i = 0; i < spinnerArr.length; i++) {
    t += 200;
    setTimeout(() => {
      process.stdout.write("\r" + spinnerArr[i]);
    }, t)
  }
}

spinner(spinnerArr);