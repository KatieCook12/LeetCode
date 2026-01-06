function reversePrefix(s: string, k: number): string {

    let word: string = "";

    word += s.slice(0, k).split("").reverse().join("").concat(s.slice(k));

    return word;

};