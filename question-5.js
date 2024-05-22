// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let value = [];
  for (let i = 0; i < products.length; i++) {
    value.push(products[i].price * products[i].quantity);
  }
  let totalPrice = value[0] + value[1] + value[2];

  if (promotionCode == "SALE20") {
    promotionCode = 0.2;
  } else if (promotionCode == "SALE50") {
    promotionCode = 0.5;
  } else {
    promotionCode = 0;
  }

  let netPrice = totalPrice * (1 - promotionCode);
  return netPrice;
}

console.log(calculateTotalPrice(products, promotionCode));
