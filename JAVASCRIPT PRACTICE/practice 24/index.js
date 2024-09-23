function product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};

const product1 = new product("widget", 100, 3);
const totalValue1 = product1.calculateTotalValue();

console.log(`Total Value of ${product1.name}: $${totalValue1}`);

console.log(product.prototype);
console.log(product1);
