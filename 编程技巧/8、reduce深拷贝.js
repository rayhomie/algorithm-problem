const deepClone = (obj) =>
  Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] =
        typeof obj[key] !== "object" || obj[key] === null
          ? obj[key]
          : deepClone(obj[key]);
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );

const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
  h: [null, false, "", true, 1, "a"],
  i: { j: 0, k: false, l: "a" },
};

console.log(deepClone(obj));
