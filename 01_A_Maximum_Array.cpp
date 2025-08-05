// (a) Finding Maximum from Array (Iterative approach - recursion removed)
#include <iostream>
using namespace std;

int findMax(int arr[], int n) {
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal)
            maxVal = arr[i];
    }
    return maxVal;
}

int main() {
    int arr[] = {10, 25, 15, 5, 30};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Maximum value in array: " << findMax(arr, n);
    return 0;
}
