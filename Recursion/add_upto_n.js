function sum_upto_n(n) {
    //Base Case
    if (n === 1) return 1;
    return n + sum_upto_n(n - 1);
}
console.log(sum_upto_n(4));


/* ----Working---- */
// * (n === 1), Base case stops further recursion. *
// * Then, the function calls return values one by one (unwinding the stack). *
// sum_upto_n(1) returns 1 (Base Case).
// sum_upto_n(2) computes 2 + 1 = 3 and returns 3.
// sum_upto_n(3) computes 3 + 3 = 6 and returns 6.
// sum_upto_n(4) computes 4 + 6 = 10 and returns 10.