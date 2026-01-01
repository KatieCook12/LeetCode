function isFascinating(n: number): boolean {

    const concat: string = (String(n) + String(n * 2) + String(n * 3)).split("").sort((a, b) => Number(a) - Number(b)).join("");

    for (let i = 1; i <= 9; i++) {
        if (concat[i - 1] != String(i)) {
            return false;
        }
    }

    return true;

};