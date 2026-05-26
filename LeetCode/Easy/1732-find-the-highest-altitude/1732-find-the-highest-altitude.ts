function largestAltitude(gain: number[]): number {

    let highestAltitude: number = 0;

    gain.reduce((accumulator, currentValue) => {
        const newAltitude: number = accumulator + currentValue;

        if (newAltitude > highestAltitude) {
            highestAltitude = newAltitude;
        }

        return newAltitude;
    }, 0);


    return highestAltitude;
};
