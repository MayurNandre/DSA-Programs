function selectionSort(arr) {
    let n = arr.length;
    isSmall = false;
    for (let i = 0; i < n - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
                isSmall = true;
            }
        }
        if (!isSmall) {
            return console.log("Allready Sorted :", arr);
        }
        //Swaping
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
    }
    return console.log("Sorted :", arr);
}

//Fuction calling
let myArray = [90, 50, 70, 20, 40, 30, 60, 10, 100, 80];
selectionSort(myArray);