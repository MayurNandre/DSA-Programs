function printPrimeUpto(n) {
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}

//Function call
printPrimeUpto(40);