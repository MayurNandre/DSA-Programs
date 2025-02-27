function reverseString(s) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse;
}

function CheckPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// let str = "level";
// console.log(CheckPalindrome(str) ? "Palindrome" : "Not Palindrome");

let str = "MayurNandre";
console.log(reverseString(str));