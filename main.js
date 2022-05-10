let descendingOrder =(n)=>Number(n.toString().split('').map(x=> x = Number(x)).sort((a,b)=>b-a).join(''))


/*

7kyu Descending Order


Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

BEST SOLUTİONS

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

-------------------------------------------------------------------------

function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}

-------------------------------------------------------------------------