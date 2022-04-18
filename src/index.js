/**
 * const.let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変ん数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// val1 = "Var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは際宣言不可能
// let val2 = "let変数変数際宣言";

// const val3 = "const変数宣言";
// console.log(val3);

// //const変数は上書き不可
// // val3 = "const変数上書き"

// const val3 = "const変数を際宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "かずや",
//   age: 50
// };
// val4.name = "KAZUYA";
// val4.addres = "osaka";
// console.log(val4);


//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monky")
// console.log(val5);

/**
 * テンプレート文字列
 */


// const name = "かずや";
// const age = 50;

// //「私の名前はかずやです。年齢は50歳です。」

// // 従来方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数

// function func1(str) {
//     return str;
// }
// const func1 = function(str) {
//  return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
// return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//     return num1 + num2;
// };
// console.log(func3(10,20))

/**
 * 分割代入
 */

// const myProfile = {
//     name:"KAZUYA",
//     age:50,
// };

// const massage1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(massage1);

// const { name, age} = myProfile;
// const massage2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(massage2);

// const myProfile = ['KAZUYA', 28];

// const massage3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(massage3);

// const [name, age] = myProfile;
// const massage4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(massage4);

/**
 * デフォルト血、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello( "KAZUYA");
