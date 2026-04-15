function minimumFlips(n: number): number {

    const toBinary: string = n.toString(2);
    let count: number = 0;

    let left: number = 0;
    let right: number = toBinary.length - 1;

    while (left < right) {

        if (toBinary[left] != toBinary[right]) {
            count += 2;
        }
        left++;
        right--;
    }

    return count;
};