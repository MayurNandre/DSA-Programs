function reverseString(s) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse;
}

//Function call
let str = "MayurNandre";
console.log(reverseString(str));