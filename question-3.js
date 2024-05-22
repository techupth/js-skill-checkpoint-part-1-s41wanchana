// Question #3
let userPassword1 = "swnalWadqQ";
let userPassword2 = "TechUp";
let userPassword3 = "abcde";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(password) {
  if (password.length < 6) {
    return "Weak";
  } else if (password.length >= 6 && password.length < 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

console.log(checkPasswordStrength(userPassword1));
console.log(checkPasswordStrength(userPassword2));
console.log(checkPasswordStrength(userPassword3));
