//if,else,nested if
let nilai = prompt('Masukkan nilai : ');

if (nilai >= 90 && nilai <= 100) {
    alert('Nilai A');
}else if (nilai >= 80 && nilai <= 89) {
    alert('Nilai B');
}else if (nilai >= 70 && nilai <= 79) {
    alert('Nilai C');
} else if (nilai >= 60 && nilai <= 69) {
    alert('Nilai D');
} else if (nilai >= 0 && nilai <= 59) {
    alert('Nilai E');
} else {
    alert('Tidak ada nilai');
}

// nested if
let username = prompt('Masukkan username : ');
let password = prompt('Masukkan password : ');

if (username == "fajar") {
    if (password == "123") {
        alert('Login berhasil');
    } else {
        alert('Username atau Password salah');
    }
}


// switch case
console.log("");
console.log("Contoh Switch case: ");

let syntax = "switch";

switch (syntax) {
    case "switch":
        console.log("syntax switch");
        break;
    case "if":
        console.log("syntax if");
        break;
    case "for":
        console.log("syntax for");
        break;
    case "do-while":
        console.log("syntax do while");
        break;
    default:
        console.log("Syntax tidak dikenali");
}

// for statement
for (let i = 1; i <= 15; i++) {
    console.log("Anak ke-" + i);
}

// while, do while
console.log("");
console.log("Contoh While, do while: ");

let x = 1;

do {
    console.log("umur x: " + x);
    x++;
} while (x <= 10);

// function
console.log("");
console.log("Contoh function (tambah): ");
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 15);
console.log("Hasil penambahan: " + hasil);