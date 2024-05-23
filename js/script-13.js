function adjustNumber(n) {
    if (n > 10) {
        n -=5;
    } else {
        n += 5;
    }
    console.log(n);
}

adjustNumber(1);
adjustNumber(10);
adjustNumber(13);