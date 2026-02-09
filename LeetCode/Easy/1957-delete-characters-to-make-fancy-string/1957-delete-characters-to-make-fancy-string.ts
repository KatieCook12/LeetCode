function makeFancyString(s: string): string {

    const sLength: number = s.length;
    const fancyString: string[] = [];
    let count: number = 1;

    fancyString.push(s[0]);

    for (let i = 1; i < sLength; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count < 3) {
            fancyString.push(s[i]);
        }
    }

    return fancyString.join("");
}
