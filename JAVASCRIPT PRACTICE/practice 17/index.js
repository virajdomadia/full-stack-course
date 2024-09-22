let arr = [1, 3, 2, 1, 5, 1, 1, 6];
let target = 1;

let filterArr = arr.filter(function (value) {
  return value !== target;
});

console.log(filterArr);
