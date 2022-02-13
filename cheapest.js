const phones = [
    {name: 'Samsung m32', price: 45000, camera: 32, storage: 128},
    {name: 'Oppo a13', price: 35000, camera: 32, storage: 64},
    {name: 'Saomi 7', price: 25000, camera: 16, storage: 32},
    {name: 'Walton m20', price: 13000, camera: 8, storage: 16},
    {name: 'Nokia N95', price: 8000, camera: 4, storage: 2},
    {name: 'htc 1', price: 18000, camera: 8, storage: 16}

];

let cheapest = phones[0];
for (const phone of phones) {
    if(phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log (cheapest);