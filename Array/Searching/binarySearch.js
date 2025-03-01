//binary search algorithm only work on sorted array
function searchElement(arr, el) {
    let head = 0;
    let tail = arr.length - 1;
    while (head <= tail) {
        let mid = Math.round((head + tail) / 2);
        console.log(mid)
        if (arr[mid] == el) {
            return console.log("Element found at index : ", mid);
        }
        if (arr[mid] > el) {
            tail = mid - 1;
        } else {
            head = mid + 1
        }
    }
    return console.log("Element not found !");
}

let my_array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
searchElement(my_array,90);