//十进制表示二进制：0b开头
//十进制表示八进制：0开头
//十进制表示十六进制：0x开头

//十进制 转 n进制
var n = 10;
console.log(Number(200).toString(n)); //200
console.log(Number(0xc8).toString(n)); //200
n = 2;
console.log(Number(200).toString(n)); //11001000

//n进制 转 十进制
var n = 2;
console.log(parseInt("11001000", n)); //200
n = 16;
console.log(parseInt("c8", n)); //200
n = 10;
console.log(parseInt(Number(0xc8), n)); //200
