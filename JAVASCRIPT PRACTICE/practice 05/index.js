let str = "hello world!!";

let reverseStr = () => {
  let rev = str.split("").reverse().join();
  console.log(rev);
};

reverseStr();
