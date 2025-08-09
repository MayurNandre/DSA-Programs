// (d) Weighted UNION and Collapsing FIND (Disjoint Set)
#include <iostream>
using namespace std;

const int N = 10;
int parent[N], sizeSet[N];

void makeSet(int n) {
    for (int i = 0; i < n; i++) {
        parent[i] = i;
        sizeSet[i] = 1;
    }
}

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]); // Path compression
    return parent[x];
}

void unionSet(int a, int b) {
    int rootA = find(a);
    int rootB = find(b);
    if (rootA != rootB) {
        if (sizeSet[rootA] < sizeSet[rootB])
            swap(rootA, rootB);
        parent[rootB] = rootA;
        sizeSet[rootA] += sizeSet[rootB];
    }
}

int main() {
    makeSet(10);
    unionSet(1, 2);
    unionSet(2, 3);
    unionSet(4, 5);
    unionSet(5, 6);
    unionSet(3, 6);

    cout << "Find(2): " << find(2) << endl;
    cout << "Find(5): " << find(5) << endl;
    cout << "Find(6): " << find(6) << endl;

    return 0;
}
