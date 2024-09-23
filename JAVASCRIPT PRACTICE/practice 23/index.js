function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log("Count: ", count);
  }
  return {
    incrementCounter: function () {
      increment();
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();

console.log(counter.getCount());
