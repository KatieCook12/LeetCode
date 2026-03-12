function minimumIndex(capacity: number[], itemSize: number): number {

    const capacityLength: number = capacity.length;
    let currentNumber: number = Infinity;
    let currentIndex: number = -1;
    
    for (let i = 0; i < capacityLength; i++) {
        if (capacity[i] >= itemSize) {
            if (capacity[i] < currentNumber) {
                currentNumber = capacity[i];
                currentIndex = i;
            }
        }
    }

    return currentIndex;
}
