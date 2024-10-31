// Buatlah function yang mempunyai parameter / argument object tasks kemudian return value nya berupa string (gunakan teknik string literal). 

function bikinRingkasanTugas(tugas) {
    const tugasSelesai = tugas.filter(t => t.selesai).length;
    const tugasBelumSelesai = tugas.filter(t => !t.selesai).length;
    return `
        Ringkasan Tugas:
        - Tugas Selesai: ${tugasSelesai}
        - Tugas Belum Selesai: ${tugasBelumSelesai}
    `;
    }

    const tugas = [
        { judul: "Belajar JavaScript", selesai: true },
        { judul: "Bikin project NodeJS", selesai: false },
        { judul: "Redesign website", selesai: true },
        { judul: "Buat laporan bulanan", selesai: false },
    ];
    
    const ringkasan = bikinRingkasanTugas(tugas);
    console.log(ringkasan);
    
    
// Tolong jelaskan dengan caramu sendiri tentang kode berikut ini: 

function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);

// Pertama, ada function namanya sumOfNumbers. Function ini bisa nerima banyak angka sekaligus, loh! Caranya, pake tanda titik-titik (ellipsis) di depan parameter numbers. Jadi, semua angka yang dimasukin ke function ini bakal disimpen di dalam array numbers.

//Nah, di dalam function sumOfNumbers, kita pake method reduce() buat nambahin semua angka yang ada di array numbers. reduce() ini kayak punya dua bagian: satu buat nyimpen total yang udah ditambahin, satunya buat angka yang lagi diolahin.

//Jadi, setiap kali reduce() jalan, dia bakal nambahin angka yang lagi diolahin ke total yang udah ada. Terus, total yang udah ditambahin itu disimpen lagi di total. Keren, kan?

//Terakhir, kita panggil function sumOfNumbers dengan masukin beberapa angka, kayak 1, 2, 3, 4, 5. Function ini bakal nambahin semua angka itu dan balikin hasilnya. Terus, kita tampilkan hasilnya di console pake console.log().
