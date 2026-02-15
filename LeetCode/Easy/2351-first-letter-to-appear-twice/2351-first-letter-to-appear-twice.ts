function repeatedCharacter(s: string): string {

    const characterSet: Set<string> = new Set()

    for (const ch of s) {

        if (characterSet.has(ch)) {
            return ch;
        }
        else {
            characterSet.add(ch)
        }

    }

};