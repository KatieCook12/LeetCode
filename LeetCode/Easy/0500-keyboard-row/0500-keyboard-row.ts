function findWords(words: string[]): string[] {
    const regexes: RegExp[] = [
        /^[qwertyuiop]+$/i,
        /^[asdfghjkl]+$/i,
        /^[zxcvbnm]+$/i
    ];

    return regexes.flatMap(regex =>
        words.filter(word => regex.test(word))
    );
}