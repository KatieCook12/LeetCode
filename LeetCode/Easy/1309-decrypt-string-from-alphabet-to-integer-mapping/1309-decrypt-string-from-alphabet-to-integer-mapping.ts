function freqAlphabets(s: string): string {

    let index: number = 0;
    const sLength: number = s.length;
    let decryptedString: string = "";

    while (index < sLength) {

        if (s[index + 2] == "#") {
            decryptedString += String.fromCharCode(+s.slice(index, index + 2) + 96);
            index += 3;
        }
        else {
            decryptedString += String.fromCharCode(+s[index] + 96);
            index += 1;
        }
    }

    return decryptedString;

};