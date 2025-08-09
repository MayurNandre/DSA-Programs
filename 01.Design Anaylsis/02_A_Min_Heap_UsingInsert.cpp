// (a) Min Heap using Insert
#include <iostream>
#include <vector>
using namespace std;

void insertMinHeap(vector<int>& heap, int value) {
    heap.push_back(value);
    int i = heap.size() - 1;

    while (i > 0 && heap[(i - 1) / 2] > heap[i]) {
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
    vector<int> minHeap;
    insertMinHeap(minHeap, 10);
    insertMinHeap(minHeap, 20);
    insertMinHeap(minHeap, 5);
    insertMinHeap(minHeap, 30);
    insertMinHeap(minHeap, 3);
    cout << "Min Heap: ";
    printHeap(minHeap);
    return 0;
}
