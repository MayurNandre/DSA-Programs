function printDescending(n) {
    //Base Case
    if (n === 0) return;
    console.log(n)
    printDescending(n - 1);
}
printDescending(20);

// This function prints numbers from n to 1 in descending order.
// It follows a pre-recursive approach, meaning the value of n is
// printed before making the recursive call.