function countOdds(low: number, high: number): number {

    const lowOdd: boolean = low % 2 != 0;
    const highOdd: boolean = high % 2 != 0;

    const distance: number = high - low;

    if (lowOdd && highOdd) {
        return distance / 2 + 1;
    }
    else if (!lowOdd && !highOdd) {
        return distance / 2;
    }
    
    return (distance + 1) / 2;

};