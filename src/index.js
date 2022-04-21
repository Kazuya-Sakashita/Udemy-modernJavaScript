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
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello( "KAZUYA");


/**
 * スプレッド構文...
 */
//配列の展開

// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);


// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、統合
//  const arr4 = [10, 20];
//  const arr5 = [30, 40];

//  const arr6 =[...arr4];
//  arr6[0] = 100; 
// console.log(arr6);
// console.log(arr4);

//  const arr7 =[...arr4, ...arr5];
//  console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;    //arr4までデータが置き換わる
// console.log(arr8); 
// console.log(arr4); 


/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田","坂下"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }


// const nameArr2 = nameArr.map((name)=>{
//     return name;
// })
// console.log(nameArr2);

// nameArr.map((name)=> console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newArr = numArr.filter((num) =>{
//     return num % 2 === 0;
// });
// console.log(newArr);

// const newNameArr = nameArr.map((name)=>{
//     if (name === '坂下'){
//         return name
//     } else {
//         return `${name}さん`
//     }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */

//使いすぎると可読性が悪くなるので使うところに注意
// ある条件？　条件がtureの時　:条件がfalseの時

// const val1 = 1 > 0 ? 'tureです' : 'falseです';
// console.log(val1);


// const num = 2500;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number'? num.toLocaleString() :'数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => { 
//     return num1 + num2 > 100 ? '１００を超えています！！' : '許容範囲内です';
// }
// console.log(checkSum(50,40));