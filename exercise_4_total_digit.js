function totalDigitRekursif(angka) {
    var str = String(angka)
    if (str.length === 1) {
        return angka
    }
    var firstDigit = Number(str[0])
    return firstDigit + totalDigitRekursif(Number(str.substring(1, )))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5