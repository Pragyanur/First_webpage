
//string manipulation methods:

const str = 'Computer Science';


console.log("");
console.log("PROGRAM STARTS HERE ");
console.log("");

console.log("toUpperCase: " + str.toUpperCase()); //truns everything to string as we are using comncatenation
console.log("typeof 'str': " + typeof str);
console.log("split at e: " + str.split("e"));
console.log("indexOf 'ie': " + str.indexOf('ie'));
console.log("indexOf 'rt': " + str.indexOf('rt'));   //returns -1 as this substring doesn't exist
console.log("lastIndexOf 'e': " + str.lastIndexOf('e'));
console.log("slice(4,9): " + str.slice(4, 9) + "<");
let a = str.includes("terS");

console.log("includes('terS')" + a);                //returns false as 'terS' doesn't exist

//javascript makes it easy to split strings in comma separated files

console.log("Hello,World,!,This,is,a,comma,separated,string".split(','));

let m = 7;
let n = 7.0;
console.log(m === n);

const str1 = "40";
console.log("'40' + 5: " + str1 + 5);
const num = 40;
console.log("40 + 5: ");
console.log(num + 5);
console.log("Number(str1) + 5: ");
console.log(Number(str1) + 5);


const alpha = "ALPHA";
// module.exports = {
//     alpha,
// }

exports.alp = alpha; //exports
