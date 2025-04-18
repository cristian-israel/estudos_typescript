function addOrConcat(x: number | string, y: number | string) {
  if (typeof x == "number" && typeof y == "number") return x + y;
  return `${x}${y}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat("10", "20"));
console.log(addOrConcat(10, "20"));
console.log(addOrConcat("10", 20));
