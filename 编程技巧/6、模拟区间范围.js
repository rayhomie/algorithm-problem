/**
 * 想要熟人任意value，但输出始终在 [1,360] 这个区间范围
 */
function controlValue(value) {
  return Math.max(Math.min(value, 360), 1);
}
console.log(controlValue(-111111111)); //1
console.log(controlValue(1000000)); //360
