// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

//1) ให้แก้ไขจำนวนสินค้า “Apple” จาก `100` เป็น `200`

inventory[0].quantity = 200;

//2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา `20` บาท และมีจำนวน `300` ชิ้นในสต็อก

inventory[2] = { name: "Orange", price: 20, quantity: 300 };

//3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก

let netValue =
  inventory[0].price * inventory[0].quantity +
  inventory[1].price * inventory[1].quantity +
  inventory[2].price * inventory[2].quantity;
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${netValue} บาท`);
