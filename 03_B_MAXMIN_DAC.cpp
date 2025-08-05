// (b) MAXMIN (Divide and Conquer)
#include <iostream>
#include <climits>
#include <chrono>
using namespace std;
using namespace std::chrono;

pair<int, int> maxMin(int arr[], int low, int high) {
    if (low == high) return {arr[low], arr[low]};
    else if (high == low + 1) {
        if (arr[low] > arr[high]) return {arr[low], arr[high]};
        else return {arr[high], arr[low]};
    } else {
        int mid = (low + high) / 2;
        auto left = maxMin(arr, low, mid);
        auto right = maxMin(arr, mid + 1, high);
        return {max(left.first, right.first), min(left.second, right.second)};
    }
}

int main() {
    int n = 1000;
    int arr[n];
    for (int i = 0; i < n; i++) arr[i] = rand() % 1000;

    auto start = high_resolution_clock::now();
    auto result = maxMin(arr, 0, n - 1);
    auto stop = high_resolution_clock::now();

    cout << "Max: " << result.first << ", Min: " << result.second << endl;
    cout << "Time taken: " << duration_cast<microseconds>(stop - start).count() << " µs" << endl;
}
