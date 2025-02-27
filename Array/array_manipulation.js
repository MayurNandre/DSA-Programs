/*------------Function Section-------------*/
//TraverseArray Function
function TraverseArray(arr) {
    if (!arr.length == 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Index ${i} :`, arr[i])
        }
    } else {
        console.log("Given Array Is Empty  !")
    }
}

//Insert Element At Last
function InsertElementAtLast(arr, element) {
    arr[arr.length] = element;
}

//Insert Element At First
function InsertElementAtFirst(arr, element) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = element;
}

//Insert Element At Given Index
function InsertElementAtIndex(arr, index, element) {
    if (!index < 0 || index > arr.length) {
        for (let i = arr.length; i > index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = element;
    } else {
        console.log("Invalid Index !")
    }
}

//Delete Last Element
function DeleteLastElement(arr) {
    if (!arr.length == 0) {
        arr.length = arr.length - 1;
    } else {
        console.log("Given Array Is Empty  !")
    }
}

//Delete First Element
function DeleteFirstElement(arr) {
    if (!arr.length == 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
    } else {
        console.log("Given Array Is Empty !")
    }
}

//Delete From Index
function DeleteFromIndex(arr, index) {
    if (index < 0 || index > arr.length) {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
        return 1;
    }
    else {
        console.log("Invalid Index !")
        return 0;
    }
}

//Function to search element
function searchElement(arr, element) {
    let found = 0;
    if (!arr.length == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                var foundAt = i;
                found = 1;
                break;
            }
        }
        if (found) {
            console.log("Element Found At Index :", foundAt);
        } else {
            console.log("Given Element Not Found !")
        }

    } else {
        console.log("Given Array Is Empty !")
    }
}

// function for sorting an array
function sortArray(arr) {
    if (!arr.length == 0) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    } else {
        console.log("Given Array Is Empty !")
    }
}

// function to reverse Array
function reverseArray(arr) {
    if (!arr.length == 0) {
        left = 0;
        right = arr.length - 1;
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        return arr;
    } else {
        console.log("Given Array Is Empty !")
    }
}

/*------------Function Section End-------------*/

let myArray = [40, 30, 60, 10, 5, 20];

// InsertElementAtLast(myArray, 90);
// TraverseArray(myArray);

// InsertElementAtFirst(myArray, 70);
// TraverseArray(myArray);

// InsertElementAtIndex(myArray, 3, 10)
// TraverseArray(myArray);

// DeleteLastElement(myArray);
// TraverseArray(myArray);

// DeleteFirstElement(myArray);
// TraverseArray(myArray);

// if (DeleteFromIndex(myArray, 5)) {
//     TraverseArray(myArray);
//     console.log("Length :", myArray.length)
// }

// searchElement(myArray, 50);

// let SortedArray = sortArray(myArray);
// TraverseArray(SortedArray);

// let ReverseArr = reverseArray(myArray);
// TraverseArray(ReverseArr);