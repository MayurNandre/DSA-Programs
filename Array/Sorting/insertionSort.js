function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        cur = arr[i];
        prev = i - 1;
        while (prev >= 0 && arr[prev] > cur) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev+1] = cur;
    }
    return console.log(arr);
}


//Fuction calling
let myArray = [90, 50, 70, 20, 40, 30, 60, 10, 100, 80];
insertionSort(myArray);