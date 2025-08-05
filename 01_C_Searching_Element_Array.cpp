// (c) Searching Element in Array (Iterative Linear Search)
#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;
    }
    return -1; // Not found
}

int main() {
    int arr[] = {3, 8, 12, 5, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 5;

    int index = linearSearch(arr, n, key);

    if (index != -1)
        cout << "Element " << key << " found at index " << index;
    else
        cout << "Element not found";

    return 0;
}
