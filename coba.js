// let month = 2;
// let monthName;

// switch(month) {
//     case 1:
//         monthName = "January"
//         break
//     case 2:
//         monthName = "February"
//         break
//     case 3:
//         monthName = "Maret"
//         break
//     case 4:
//         monthName = "April"
//         break
//     case 5:
//         monthName = "may"
//         break
//     case 6:
//         monthName = "June"
//         break
//     default:
//         monthName = "Invalid Name"
// }

// console.log(monthName)

// let score = 90;

// if (score >= 90) {
//     console.log("A")
// }   else if (score >= 80) {
//     console.log("B")
// }   else if (score >= 70) {
//     console.log("C")
// }   else {
//     console.log("D")
// }


// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


// let i = 10;
// do {
//     console.log(i)
//     i--;
// } while (i > 0)

// function greet(name) {
//     console.log(`Helllo ${name}!`)
// }

// greet("Lilo")

// const greet = function(name) {
//     return(`Hello ${name}!`)
// }
// console.log(greet("Lilo"))

// function sum(...angka) {
//     return angka.reduce((total, num) => total + num, 0)
// }

// console.log(sum(1, 2, 3, 4, 5))
// const arr1 = [1, 2, 3,]
// const arr2 = [...arr1, 7, 8, 9,]
// console.log(arr2)
// console.log(arr1[1])

// let awal = [10, 20, 30, 40, 50]
// let bagi = awal.map(num => num / 2)
// console.log(bagi)

// let warga = {
//     nama: "Jack",
//     umur: 18,
//     gender: "Laki-laki"
// }

// console.log(warga)
// warga.asal = "Jamaika"
// console.log(warga)
//console.log(warga.nama)

// let salaries = {
//     John: 1000,
//     Maria: 3000,
//     Via: 6000,
// }
// let salaryValues = Object.values(salaries)
// // console.log(salaryValues)
// let salarySum = salaryValues.reduce((total, salary) => total + salary, 0);
// console.log(salarySum)


// Studi Kasus E-commerce
const product = [
    {id: 1, type: "Phone", price: 1000},
    {id: 2, type: "Laptop", price: 5000},
    {id: 3, type: "Monitor", price: 3000}
]

const discountedProducts = product.map(product => ({
    ...product,
    price: product.price * 0.9
}));
console.log(discountedProducts)