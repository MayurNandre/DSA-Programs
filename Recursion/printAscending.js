function printAscending(n) {
    //Base Case
    if (n === 0) return;
    printAscending(n - 1);
    console.log(n);
}
printAscending(20);

// This function prints numbers from 1 to n in ascending order.
// It follows a post-recursive approach, meaning the recursive
//  call happens first, and then the value of n is printed.