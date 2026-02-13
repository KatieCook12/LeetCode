function replaceDigits(s: string): string {

    const replacedDigits: string[] = [];
    const sLength: number = s.length;
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < sLength; i++) {

        if (s[i].charCodeAt(0) <= 57) {
            replacedDigits.push(alphabet[alphabet.indexOf(s[i - 1]) + Number(s[i])])
        }

        else {
            replacedDigits.push(s[i])
        }
    }

    return replacedDigits.join("");

};