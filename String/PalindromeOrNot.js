function CheckPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

//function call
let str = "level";
console.log(CheckPalindrome(str) ? "Palindrome" : "Not Palindrome");
