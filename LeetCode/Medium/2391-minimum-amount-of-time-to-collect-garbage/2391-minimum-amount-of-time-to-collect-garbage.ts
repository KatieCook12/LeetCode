function garbageCollection(garbage: string[], travel: number[]): number {

    const prefix = [0];

    for (let i = 0; i < travel.length; i++) {
        prefix.push(prefix[i] + travel[i]);
    }

    let count: number = 0;

    function amountOfTime(array: string[], type: string) {

        const arrayType: string[][] = garbage.map(g => g.split("").filter(house => house === type));

        const arrayTypeTrimmedLength: number = arrayType.slice(0, arrayType.findLastIndex(g => g.length > 0) + 1).length;

        if (arrayTypeTrimmedLength > 1) {
            count += prefix[arrayTypeTrimmedLength - 1];
        }

        count += arrayType.join("").split("").filter(c => c === type).length;
    }

    amountOfTime(garbage, "M");
    amountOfTime(garbage, "P");
    amountOfTime(garbage, "G");

    return count;

};