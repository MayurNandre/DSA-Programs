function searchElement(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return console.log("Element found at index :", i);
        }
    }
    return console.log("Element not found !");
}

let my_array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
searchElement(my_array,0);