function minimumBoxes(apple: number[], capacity: number[]): number {

    let appleSum: number = apple.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

    capacity.sort((a, b) => b - a);

    return capacity.reduce((accumulator, currentValue) => {
        if (appleSum > 0) {
            appleSum -= currentValue;
            accumulator++;
        }
        return accumulator;
    }, 0);
};