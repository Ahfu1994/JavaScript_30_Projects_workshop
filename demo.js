const { Console } = require('console');

let prompt = require('prompt-sync')();
// let rating = parseInt(prompt('Rating :1-5 >>'));
// for (let i = 1; i <= 5; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += j + " ";
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//     let str = '';
//     let v = 0;
//     for (let j = 1; j <= 5; j++) {
//         // v = i * j;
//         str += i * j;
//         str += (i * j < 10) ? '   ' : '  ';
//     }
//     console.log(str);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let username = 'chiradetkho';
// let password = 1234;
// while (true) {
//     let inputUsername = prompt();
//     let inputPassword = parseInt(prompt());
//     if (username == inputUsername && password == inputPassword) {
//         console.log('access success');
//         break;
//     } else {
//         console.log('Username or password wrong!!!');
//     }

//     console.log('Do u want to try again? y or Y continus, n or N break');
//     let str = prompt();
//     if (str == 'n' || str == 'N') {
//         break;
//     }
// }

// let number = parseInt(Math.random() * 100);
// console.log(number);
// let round = 1;
// let guessnumber;
// do {

//     console.log('Please input guessnumber ' + round);
//     guessnumber = parseInt(prompt());
//     round++;
//     if (round == 7) {
//         console.log('out of round !!!');
//         break;
//     } else if (guessnumber == number) {
//         console.log('you win!!!');
//         break;
//     }

// } while (true);

// function sumRang(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum = sum + i;

//     }

//     console.log(`sum ${start}-${end} = ${sum}`);
// }

// sumRang(1, 10);
// sumRang(11, 20);

// function func(num) {
//     console.log(num);
// }

// function shoNum(num, callback) {
//     num += 1;
//     callback(num);
// }

// shoNum(10, func);

// let x = function() {
//     console.log("i am callback function");
// }

// let y = function(func) {

//     console.log("do something");
//     func();
// }

// y(x);

// let calc = function(num1, num2, calcType) {

//     if (calcType === 'add') {
//         return num1 + num2;
//     } else if (calcType === 'multiply') {
//         return num1 * num2;
//     }

// }

// console.log(calc(1, 2, 'multiply'));

// let add = function(num1, num2) {
//     return num1 + num2;
// }

// let multiply = function(num1, num2) {
//     return num1 * num2;
// }

// let doWhatever = function(num1, num2) {
//     console.log(`here are your two numbers black ${num1}, ${num2}`);
// }

// let calc = function(num1, num2, callback) {
//     return callback(num1, num2);
// }

// console.log(calc(2, 5, doWhatever));
// console.log(calc(7, 5, doWhatever));
// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// let add = (x, y) => {
//     return x + y;
// }

// let sub = (x, y) => {
//     return x - y;
// }

// let a = calculate(10, 20, add);
// let b = calculate(10, 20, sub);
// let c = calculate(10, 20, (x, y) => x * y);
// let d = calculate(10, 20, (x, y) => x / y);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// var a = new Array(1, 2, 3, 4, 5);
// console.log(a.length)
// for (let i = 0; i < a.length; i++) {
//     a[i] = prompt('input number');
// }

// let a = [2, 3, 4, 5, 6, 7];
// for (i in a) {
//     console.log(a[i]);
// }

// let b = [2, 3, 4, 5, 6, 7];
// for (i of a) {
//     console.log(i);
// }

// let a = ['๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
// let b = ['หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
// let thainum = '';
// let arabicnum = '';
// let input = prompt('input number=>');
// for (i of input) {
//     thainum = thainum + a[i];
//     arabicnum = arabicnum + b[i];

// }

// console.log(thainum);
// console.log(arabicnum);