function replaceDigits(s: string): string {

    const replacedDigits: string[] = [];
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {

        if (s[i].charCodeAt(0) <= 57) {
            replacedDigits.push(String.fromCharCode(s[i - 1].charCodeAt(0) + Number(s[i])))
        }

        else {
            replacedDigits.push(s[i])
        }
    }

    return replacedDigits.join("");

};