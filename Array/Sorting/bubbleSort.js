//--Bubble Sort--
function bubbleSort(arr) {
    if (arr.length == 0) {
        return console.log("Array Is Empty !")
    }
    let n = arr.length;
    let isSwap = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //Swaping
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwap = true;
            }
        }
        if (!isSwap) {
            return console.log("Allready sorted :", arr);
        }
    }
    return console.log(arr);
}

//Fuction calling
let myArray = [90, 50, 70, 20, 40, 30, 60, 10, 100, 80];
bubbleSort(myArray);