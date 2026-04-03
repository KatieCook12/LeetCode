function greatestLetter(s: string): string {

    let uppercaseChar: string = "";

    for (const ch of s) {
        if (s.includes(String.fromCharCode(ch.charCodeAt(0) + 32))) {
            if (uppercaseChar < ch) {
                uppercaseChar = ch;
            }
        }
    }

    return uppercaseChar.toUpperCase();
};