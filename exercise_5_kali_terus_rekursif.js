function kaliTerusRekursif(angka) {
    if (angka < 10) {
        return angka
    }
    
    var str = String(angka)
    return kaliTerusRekursif(Number(str[0]) * kaliTerusRekursif(Number(str.substring(1, ))))
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6