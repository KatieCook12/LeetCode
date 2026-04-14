function diStringMatch(s: string): number[] {

    const sLength: number = s.length;
    let low: number = 0;
    let high: number = sLength;
    const output: number[] = [];

    for (let i = 0; i < sLength; i++) {
        if (s[i] == "I") {
            output.push(low++);
        } else {
            output.push(high--);
        }
    }

    output.push(low);
    return output;
};