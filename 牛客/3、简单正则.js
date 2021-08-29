console.log(/[A-Z]/.test("Aaa1"), /[A-Z]/.test("aaa1")); //含有大写字母 true false
console.log(/[a-z]/.test("Aaa1"), /[a-z]/.test("AAA1")); //含有小写字母 true false
console.log(
  /[A-z]/.test("aA1"),
  /[A-Za-z]/.test("Aa1"),
  /[A-Za-z]/.test("123")
); //含有大写或小写字母 true true false
console.log(
  /\d/.test("zAz3asd21"),
  /\d/.test(12312123123),
  /\d/.test("Abasdasd")
); //含有数字 true true false
