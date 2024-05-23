function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (monthNumber < 1 || monthNumber > 12) {
        return "Invalid month number";
    }

    return months[monthNumber - 1];
}

console.log(getMonthName(1));  
console.log(getMonthName(5));  
console.log(getMonthName(12)); 
console.log(getMonthName(13));