const numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    steps++;
  }

  console.log(steps);
};

numberOfSteps(123);