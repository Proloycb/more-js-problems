const products = [
    {name: 'Laptop', price: 45000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 5000},
    {name: 'phone', price: 35000}
];

let totalPrice = 0;
for (const product of products){
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);


const carts = [
    {name: 'Laptop', price: 45000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 5000, quantity: 3},
    {name: 'phone', price: 35000, quantity: 2}
];

let cartTotal = 0;

for(const product of carts){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log (cartTotal);