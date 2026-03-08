function convertDateToBinary(date: string): string {

    const dateArray: number[] = date.replace(/-/g, " ").split(" ").map(Number);
    const dateToBinary: string[] = [];

    dateArray.forEach(date => dateToBinary.push(date.toString(2)));

    return dateToBinary.join("-");
};