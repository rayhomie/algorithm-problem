// 单行
var line = readline(); //获得的是一个字符串
//如果需要对其进行处理，比如 “1 2 3 4 5”，我们想以数组形式获取每个数字
var arr = line.split(" "); // 数组内元素为字符串，eg: arr[0]="1"

// 多行
// 如果每一行的操作相同
while ((line = readline())) {
  // 代码
}
/*如果每一行操作不同
eg: 第一行给数组长度
	 第二行给用空格分开的字符串
那就每一次按照单行输入的方式来获取即可*/
var num = parseInt(readline()); // 获得数组长度
var arr = readline().split(" "); // 获得数组
