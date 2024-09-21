function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(8, 6);

const sum1 = function () {
  console.log(8 + 6);
};
sum1();

const sum2 = () => {
  console.log(8 + 6);
};
sum2();

(function () {
  console.log(8 + 6);
})();
