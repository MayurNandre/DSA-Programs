// (c) Heap Sort Ascending (Max Heap)
#include <iostream>
#include <ctime>
using namespace std;

void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSortAscending(int arr[], int n) {
    for (int i = n/2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for (int i = n-1; i >= 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    int n = 1000;
    int* arr = new int[n];
    for (int i = 0; i < n; i++)
        arr[i] = rand() % 10000;

    clock_t start = clock();
    heapSortAscending(arr, n);
    clock_t end = clock();

    cout << "Time taken for Heap Sort (Ascending): " << double(end - start) / CLOCKS_PER_SEC << " seconds\n";
    delete[] arr;
    return 0;
}
