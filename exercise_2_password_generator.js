function changeVocals (str) {
    // change each char into its next char in order (case sensitive)
    str = str.split('')
    var nextChar = [
        ['a', 'b'],
        ['i', 'j'],
        ['u', 'v'],
        ['e', 'f'],
        ['o', 'p'],
        ['A', 'B'],
        ['I', 'J'],
        ['U', 'V'],
        ['E', 'F'],
        ['O', 'P']
    ]
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < nextChar.length; j++) {
            if (str[i] === nextChar[j][0]) {
                str[i] = nextChar[j][1]
            }
        }
    }
    return str.join('')
}

function reverseWord (str) {
    // reverse order
    str = str.split('')
    var n = Math.floor(str.length / 2)
    for (var i = 0; i < n; i++) {
        var temp = str[i]
        str[i] = str[(str.length-1)-i]
        str[(str.length-1)-i] = temp
    }
    return str.join('')
}

function setLowerUpperCase (str) {
    str = str.split('')
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    for (var i = 0; i < str.length; i++) {
        var found = undefined
        var j = 0
        while (found === undefined && j < letters.length) {
            found = str[i] === letters[j] ? j : undefined
            j++
        }
        if (found !== undefined) {
            str[i] = found >= 26 ? letters[found-26] : letters[found+26]
        }
    }
    return str.join('')
}

function removeSpaces (str) {
    str = str.split('')
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            str.splice(i, 1)
        }
    }
    return str.join('')
}

function passwordGenerator (name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    return removeSpaces(
        setLowerUpperCase(
            reverseWord(
                changeVocals(name)
            )
        )
    )
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  