function largestEven(s: string): string {

    const sLength: number = s.length;
    let index: number = sLength;

    for (let i = sLength - 1; i >= 0; i--) {
        if (+s[i] % 2 == 0) {
            break;
        } else {
            index = i;
        }
    }

    return s.slice(0, index)
};