function canBeTypedWords(text: string, brokenLetters: string): number {

    let textArray: string[] = text.split(" ");

    const brokenLettersArray: string[] = brokenLetters.split("");

    for (const s of textArray) {

        for (const ch of brokenLettersArray) {

            if (s.includes(ch)) {
                textArray = textArray.filter(str => str !== s)
            }
            
        }

    }

    return textArray.length;

};