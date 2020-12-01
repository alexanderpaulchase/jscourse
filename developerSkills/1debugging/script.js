// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 273 to the temp in celcious

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // fix the bug
    // value: Number(prompt('Degress celsius: ')),
    value: 10,
  };

  // find the bug
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// Identify bug
console.log(measureKelvin());

// using a debugger
const calcTempAmpBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    debugger; // when saved it it will open the debugger in the console.
    if (temps[i] > max) {
      max = curTemp;
    }
    if (temps[i] < min) {
      min = curTemp;
    }
    console.log(max, min);
  }
  return max - min;
};

const ampNew = calcTempAmpBug([3, 5, 1], [9, 4, 5]);
// Identify bug
console.log(ampNew);
