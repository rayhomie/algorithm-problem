/*
请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
数独部分空格内已填入了数字，空白格用 '.' 表示。
注意：
一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-sudoku
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 暴力求解（使用集合、字符串标志行列区块）
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let set = new Set();//使用一个集合
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const number = board[i][j];//当前遍历到的值
      if (number === '.') continue;//直接跳出当前循环，进入下一次循环
      const rowStr = `${number}r${i}`;//行的标记（一个字符串可判断一行是否数独）
      const colStr = `${number}c${j}`;//列的标记（一个字符串可判断一列是否数独）
      const sectionStr = `${number}s(${Math.floor(i / 3)},${Math.floor(j / 3)})`;//一个字符串可判断一个9x9的宫格是否数独
      if (set.has(colStr) || set.has(rowStr) || set.has(sectionStr)) return false;//如果集合中有当前标记，则直接返回false
      set.add(colStr);//否则加入到集合
      set.add(rowStr);//否则加入到集合
      set.add(sectionStr);//否则加入到集合
    }
  }
  return true;
};
