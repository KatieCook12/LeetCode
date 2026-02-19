function halvesAreAlike(s: string): boolean {

    const sLength: number = s.length;
    const sLengthDivided = sLength / 2;

    const firstHalfVowelCount: number = s.slice(0, sLengthDivided).replace(/[^aeiou]/gi, "").length;
    const secondHalfVowelCount: number = s.slice(sLengthDivided, sLength).replace(/[^aeiou]/gi, "").length;

    return firstHalfVowelCount == secondHalfVowelCount ? true : false;
    
};