// Tipe data primitif
let varNumber = 15;
let varString = "Lilo";
let varBoolean = true;
let varUndefined;
let varSymbol = Symbol("berbeda");

// Tipe data non-primitif
let arraySaya = [1, 2, 3, 4, 5];
let objectSaya = {
    nama: "Lilo",
    umur: 18,
    gender: "Laki-laki"
}
let menyapa = function(nama) {
    console.log(`Hello, ${nama}`)
}

// Operator aritmatika
let penjumlahan = varNumber + 18; // penjumlahan
let pengurangan = varNumber - 12; //pengurangan
let perkalian = varNumber * 2; // perkalian
let pembagian = varNumber / 5; // pembagian

// operator perbandingan
let lebihBesar = varNumber > 12;
let lebihKecil = varNumber < 19;
let samaDengan = varNumber === 15;
let tidakSamaDengan = varNumber !== 11;
let lebihBesarSamaDengan = varNumber >= 15;
let lebihKecilSamaDengan = varNumber <= 15;

// penggunaan variable let, const , var 
let variabelLet = "ini variabel let";
let variabelConst = "ini variabel const";
let variabelVar = "ini variabel var";

// contoh penggunaan variabel
console.log(varNumber);
console.log(varString);
console.log(arraySaya);
console.log(objectSaya.nama);
menyapa("Fajri");
console.log(penjumlahan);
console.log(lebihBesar)
console.log(variabelLet);
console.log(variabelConst);
console.log(variabelVar);