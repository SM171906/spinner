//process.stdout.write(' | node spinner1.js \rd2\n');

const spinner = ['|', '/ ', '- ', '\\ ', '/ ', '- ', '| '];
let t = 100;
const spin = function (spinner) {
  for (let s of spinner) {
    t = t + 200;
    setTimeout(() => {
      process.stdout.write(`\r${s}`);
    }, t);
    
  }
  setTimeout(() => {process.stdout.write('\n')}, t)
};
spin(spinner);



// //process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\  ');
// }, 700);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r/  ');
// }, 900);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r-  ');
// }, 1100);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r| ');
// }, 1300);
// setTimeout(() => { process.stdout.write('\n') }, 1300)



// // ... fill in the rest yourself ...