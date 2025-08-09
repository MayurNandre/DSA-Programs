// (a) Creating Max/Min Heap using INSERT
#include <iostream>
#include <vector>
using namespace std;

void insertMaxHeap(vector<int>& heap, int value) {
    heap.push_back(value);
    int i = heap.size() - 1;

    while (i > 0 && heap[(i - 1) / 2] < heap[i]) {
        swap(heap[i], heap[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

void printHeap(const vector<int>& heap) {
    for (int val : heap)
        cout << val << " ";
    cout << endl;
}

int main() {
    vector<int> maxHeap;
    insertMaxHeap(maxHeap, 10);
    insertMaxHeap(maxHeap, 20);
    insertMaxHeap(maxHeap, 15);
    insertMaxHeap(maxHeap, 30);
    insertMaxHeap(maxHeap, 40);
    cout << "Max Heap: ";
    printHeap(maxHeap);
    return 0;
}
