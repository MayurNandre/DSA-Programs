// (a) Binary Search (C++)
#include <iostream>
#include <algorithm>
#include <chrono>
using namespace std;
using namespace std::chrono;

int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int main() {
    int sizes[] = {1000, 2000, 3000};

    for (int s = 0; s < 3; s++) {
        int n = sizes[s];
        int* arr = new int[n];

        for (int i = 0; i < n; i++)
            arr[i] = rand() % 10000;

        sort(arr, arr + n);
        int target = arr[n / 2];  // Select middle element

        auto start = high_resolution_clock::now();
        int index = binarySearch(arr, n, target);
        auto end = high_resolution_clock::now();

        auto duration = duration_cast<nanoseconds>(end - start);
        cout << "Size: " << n << " | Index: " << index 
             << " | Time: " << duration.count() << " ns" << endl;

        delete[] arr;
    }

    return 0;
}
