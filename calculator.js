const args = process.argv.slice(2); // Mengambil argumen dari baris perintah, mengabaikan dua elemen pertama

if (args.length < 3) {
    console.log('Penggunaan: node calculator.js <operasi> <angka1> <angka2>');
    console.log('Contoh: node calculator.js tambah 5 3');
    process.exit(1);
}

const operasi = args[0].toLowerCase();
const angka1 = parseFloat(args[1]);
const angka2 = parseFloat(args[2]);

if (isNaN(angka1) || isNaN(angka2)) {
    console.log('Angka1 dan Angka2 harus berupa angka.');
    process.exit(1);
}

let hasil;

switch (operasi) {
    case 'tambah':
        hasil = angka1 + angka2;
        break;
    case 'kurang':
        hasil = angka1 - angka2;
        break;
    case 'kali':
        hasil = angka1 * angka2;
        break;
    case 'bagi':
        hasil = angka1 / angka2;
        break;
    default:
        console.log('Operasi tidak dikenal. Gunakan salah satu dari: tambah, kurang, kali, bagi.');
        process.exit(1);
}

console.log(`Hasil dari ${operasi} ${angka1} dan ${angka2} adalah: ${hasil}`);
