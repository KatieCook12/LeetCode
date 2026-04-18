function reverseOnlyLetters(s: string): string {
    const isLetter = (ch: string): boolean => /[a-zA-Z]/.test(ch);

    const reversed: string[] = s
        .split("")
        .filter(isLetter)
        .reverse();

    let index: number = 0;

    return s
        .split("")
        .map((char: string): string =>
            isLetter(char) ? reversed[index++] : char
        )
        .join("");
}