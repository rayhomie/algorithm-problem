const options = [
  {
    id: "1",
    children: [
      {
        id: "1.1",
        children: [
          {
            id: "1.1.1",
          },
        ],
      },
      {
        id: "1.2",
      },
    ],
  },
  {
    id: "2",
    children: [
      {
        id: "2.1",
        children: [
          {
            id: "2.1.1",
          },
        ],
      },
    ],
  },
];
const res = [];
const cur = [];
function fun(options) {
  for (let i in options) {
    console.log("in", options[i].id);
    cur.push(options[i].id);
    if (!options[i].children) {
      console.log("return", options[i].id);
      res.push([...cur]);
      cur.pop();
      return;
    }
    fun(options[i].children);
    console.log("out", options[i].id);
    cur.pop();
  }
}
fun(options);
console.log(res);
