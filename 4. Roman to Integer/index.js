const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    '': 0
}

const romanToInt = function (s) {
    const split = s.split('')
    let decimal = 0
    let before = ''

    for (const letter of split) {
        if (map[letter] > map[before]) {
            const minus = map[before] * 2
            const subtract = map[letter] - minus
            decimal += subtract
        } else {
            decimal += map[letter]
        }

        before = letter
    }

    console.log(decimal)
};

romanToInt("MMV") // 2005
romanToInt("MCMXCIV") // 1994