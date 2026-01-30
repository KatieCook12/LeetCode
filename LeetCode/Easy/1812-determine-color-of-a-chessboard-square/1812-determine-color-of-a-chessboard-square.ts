function squareIsWhite(coordinates: string): boolean {

    const sum: number = coordinates[0].charCodeAt(0) + Number(coordinates[1]);

    if (sum % 2 === 0) {
        return false;
    }

    return true;
};