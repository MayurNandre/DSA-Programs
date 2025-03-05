function printFibonacci(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    return printFibonacci(n - 1) + printFibonacci(n - 2)
}
// console.log(printFibonacci(10));


function printFibonacciSeries(n, a = 1, b = 1) {
    if (n == 1) {
        return;
    }
    process.stdout.write(b.toString() + " ");
    printFibonacciSeries(n - 1, b, a + b);
}
printFibonacciSeries(10);