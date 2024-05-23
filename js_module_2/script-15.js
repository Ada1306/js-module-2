function sumOfDigits(number) {
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;
    
    return hundreds + tens + units;
}

console.log(sumOfDigits(123)); 
console.log(sumOfDigits(456)); 
console.log(sumOfDigits(789)); 
console.log(sumOfDigits(100)); 