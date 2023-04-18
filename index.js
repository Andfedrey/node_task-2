const readline = require('node:readline');
const fs = require('fs')
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const rightNumber = Math.floor(Math.random()) * 1;
const filtepath = 'stats.txt'
let counter = 1

// const returnData = () => {
//   let result;
//     fs.readFile(filtepath, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       result = data?.split('\n').length
//       return result
//     })
// }

rl.question('Угадай число 1 или 0 \n', (answer) => {
  const result = rightNumber === Number(answer)
  fs.stat(filtepath, function (err, stat) {
    if (!stat) {
      fs.writeFile(filtepath, `${result}`, function (err) {
        if (err) console.log(err)
      });
    } else {
      fs.appendFile(filtepath, `\n${result}`, function (err) {
        if (err) console.log(err)
      });
    }
  });
  console.log(`результат: ${result ? 'верно' : 'не верно'}`)
  rl.close()
});


