// (c) Heap Sort Descending (Min Heap)
#include <iostream>
#include <ctime>
using namespace std;

void heapifyMin(int arr[], int n, int i) {
    int smallest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < n && arr[l] < arr[smallest])
        smallest = l;

    if (r < n && arr[r] < arr[smallest])
        smallest = r;

    if (smallest != i) {
        swap(arr[i], arr[smallest]);
        heapifyMin(arr, n, smallest);
    }
}

void heapSortDescending(int arr[], int n) {
    for (int i = n/2 - 1; i >= 0; i--)
        heapifyMin(arr, n, i);

    for (int i = n-1; i >= 0; i--) {
        swap(arr[0], arr[i]);
        heapifyMin(arr, i, 0);
    }
}

int main() {
    int n = 1000;
    int* arr = new int[n];
    for (int i = 0; i < n; i++)
        arr[i] = rand() % 10000;

    clock_t start = clock();
    heapSortDescending(arr, n);
    clock_t end = clock();

    cout << "Time taken for Heap Sort (Descending): " << double(end - start) / CLOCKS_PER_SEC << " seconds\n";
    delete[] arr;
    return 0;
}
