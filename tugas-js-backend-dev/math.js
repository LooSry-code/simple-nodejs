// fungsi untuk menghitung luas lingkaran berdasarkan jari-jari yang diberikan
function luasLingkaran(jariJari) {
    const pi = 3.14159;
    const luas = pi * (jariJari **2 )
    return luas;
}
// contoh penggunaan fungsi luasLingkaran
let radius = 7;
let luas = luasLingkaran(radius);
console.log(`Luas lingkaran dengan jari-jari ${radius} adalah ${luas.toFixed(2)} satuan luas.`);

// fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan
function kuadratAngka(arrayAngka) {
        return arrayAngka.map(function(angka) {
            return angka ** 2;
        })
    }
// contoh penggunaan fungsi kuadratAngka
let deretAngka = [1, 2, 3, 4, 5];
let angkaKuadrat = kuadratAngka(deretAngka);
console.log(`Array asli mula-mula adalah: ${deretAngka}`);
console.log(`Array baru yang dikuadratkan menjadi ${angkaKuadrat}`)