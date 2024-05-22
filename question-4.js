// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้ (ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า)

function findLowestQuantities(list) {
  let lowestValue = Infinity;
  let nameOfProduct = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].quantity < lowestValue) {
      lowestValue = list[i].quantity;
      nameOfProduct = list[i].name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameOfProduct} ซึ่งมี ${lowestValue} ชิ้น`;
}

console.log(findLowestQuantities(inventory));
