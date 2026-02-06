function finalString(s: string): string {

    let finalString: string = "";
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {

        if (s[i] != "i") {
            finalString = finalString.concat(s[i])

        }

        else {
            finalString = finalString.split("").reverse().join("")
        }

    }

    return finalString;

};