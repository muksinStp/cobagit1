function sum(...args) // ...args adalah argumen berapapun banyaknya yang akan dijumlahkan
{
    return args.reduce((a, b) => a + b, 0); // reduce untuk menghitung jumlah semua argumen yang dijumlahkan 
} // return 0 untuk mengembalikan nilai awal (sum = 0)

console.log(sum(1, 2, 7));  // Output: 1+2+7+0=10
console.log(sum(1, 4));     // Output: 5
console.log(sum(11));       // Output: 11
console.log(sum(10, 3, 6, 7, 9)); // Output: 35
