// ​‌‌‍‍⁡⁣⁢⁡⁣⁢⁣‍A. 𝗔𝗺𝗯𝗶𝗹 𝗲𝗹𝗲𝗺𝗲𝗻 𝗶𝗻𝗽𝘂𝘁 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗮𝗺𝗽𝗶𝗹𝗸𝗮𝗻 𝗵𝗮𝘀𝗶𝗹⁡​
const tampilan_input = document.querySelector('.tempat-input');

// ⁡⁣⁢⁣​‌‌‍B. 𝗯𝘂𝗮𝘁 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗱𝗮𝗻 𝗧𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 𝗲𝘃𝗲𝗻𝘁 𝗹𝗶𝘀𝘁𝗲𝗻𝗲𝗿 𝘂𝗻𝘁𝘂𝗸 𝘀𝗲𝗺𝘂𝗮 𝘁𝗼𝗺𝗯𝗼𝗹​⁡

function font_Size() {
    const maxFontSize = 40; // Ukuran font awal
    const minFontSize = 5; // Ukuran font minimum
    const inputWidth = tampilan_input.offsetWidth; // Lebar elemen input
    const textWidth = tampilan_input.scrollWidth; // Lebar teks yang dimasukkan

    // Jika teks lebih panjang dari lebar input, sesuaikan ukuran font
    if (textWidth > inputWidth) {
        let newFontSize = Math.max(minFontSize, maxFontSize * (inputWidth / textWidth));
        tampilan_input.style.fontSize = `${newFontSize}px`;
    } else {
        // Jika teks masih muat, kembalikan ukuran ke font awal
        tampilan_input.style.fontSize = `${maxFontSize}px`;
    }
}

// ​‌‍‌⁡⁢⁣⁣𝟭. 𝗳𝘂𝗻𝘁𝗶𝗼𝗻(𝗙𝘂𝗻𝗴𝘀𝗶) 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 𝗻𝗶𝗹𝗮𝗶(𝗮𝗻𝗴𝗸𝗮) 𝗸𝗲 𝗵𝗮𝗹 𝗶𝗻𝗽𝘂𝘁​⁡
function nilai_input(value) {
    if (tampilan_input.value === '0' && value !== ',') {
        tampilan_input.value = value; // Ganti angka 0 dengan nilai baru
    } else if (tampilan_input.value === '0' && value === ',') {
        tampilan_input.value = '0,'; // Tambahkan koma jika nilai baru adalah koma
    } else {
        tampilan_input.value += value; // Tambahkan nilai ke akhir
    }
    font_Size(); // Sesuaikan ukuran font
}

// ​‌‍‌⁡⁢⁣⁣𝟮. 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻(𝗙𝘂𝗻𝗴𝘀𝗶) 𝘂𝗻𝘁𝘂𝗸 𝗻𝗴𝗲𝗵𝗮𝗽𝘂𝘀 𝘀𝗮𝘁𝘂 𝗮𝗻𝗴𝗸𝗮 𝗱𝗶𝗮𝗸𝗵𝗶𝗿⁡​
function delete_yg_terakhir() {
    if (tampilan_input.value.length > 1) {
        tampilan_input.value = tampilan_input.value.slice(0, -1);
    } else {
        tampilan_input.value = '0'; // Reset ke 0 jika hanya ada satu karakter
    }
    font_Size(); // Sesuaikan ukuran font
}

// ⁡⁢⁣⁣​‌‍‌𝟯. 𝗙𝘂𝗻𝗴𝘀𝗶 𝘂𝗻𝘁𝘂𝗸 𝘁𝗼𝗺𝗯𝗼𝗹 𝗔𝗖 : 𝗺𝗲𝗺𝗯𝗲𝗿𝘀𝗶𝗵𝗸𝗮𝗻 𝘀𝗲𝗹𝘂𝗿𝘂𝗵 𝗶𝗻𝗽𝘂𝘁​⁡
function bersihkan_input() {
    tampilan_input.value = '0';
    font_Size(); // Sesuaikan ukuran font
}

// 4. Fungsi untuk menghitung hasil yang ada di hal input
function hasil() {
    try {
        // Ganti koma (,) dengan titik (.) agar valid dalam JavaScript
        const sanitizedInput = tampilan_input.value.replace(/,/g, '.');
        const result = eval(sanitizedInput);

        // Perbarui tampilan dengan hasil
        tampilan_input.value = result.toString().replace(/\./g, ','); // Kembali ke format koma
    } catch (error) {
        alert('Perhitungan tidak valid!');
        bersihkan_input();
    }
}


// ⁡⁣⁢⁣⁡⁣⁢⁣​‌‌‍𝗖. 𝗺𝗲𝗻𝗷𝗮𝗹𝗮𝗻𝗸𝗮𝗻 𝘀𝗲𝗺𝘂𝗮 𝘁𝗼𝗺𝗯𝗼𝗹𝗻𝘆𝗮​⁡
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        // Tindakan berdasarkan nilai tombol
        if (value === 'AC') {
            bersihkan_input();
        } else if (value === '=') {
            hasil();
        } else if (value === '←') {
            delete_yg_terakhir();
        } else {
            nilai_input(value);
        }
    });
});