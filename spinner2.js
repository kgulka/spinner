

const annimationArr = ['\r|   ','\r/    ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];

const spin = function(arrayIn) {
  for (let i = 0; i < arrayIn.length; i++) {
    setTimeout(() => {
      process.stdout.write(arrayIn[i]);
    }, i * 200);
  }
};

spin(annimationArr);