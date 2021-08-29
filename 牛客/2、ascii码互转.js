//大写字母A-Z对应的ASCII码值是65-90
//小写字母a-z对应的ASCII码值是97-122

//将字母转为ascii码的方法：
var str = "A";
str.charCodeAt(); // 65

var str1 = "a";
str1.charCodeAt(); // 97

//将ascii码转为对应字母的方法：
var num = 97;
String.fromCharCode(num); // 'a'

var num1 = 100;
String.fromCharCode(num1); // 'd'
