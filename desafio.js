function isFibonacciNumber(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }

    return b === num;
}


// Testar com um número
const numberToCheck = 21; // Pode ser qualquer número
if (isFibonacciNumber(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}

function countLetterA(str) {
    const regex = /a/gi;
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;

    console.log(`A letra 'a' aparece ${count} vezes na string.`);
}

// Testar com uma string
const testString = "JavaScript é uma linguagem popular e poderosa.";
countLetterA(testString);


