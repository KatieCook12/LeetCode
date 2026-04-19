function reverseOnlyLetters(s: string): string {
    
    const isLetter = (ch: string): boolean => /[a-zA-Z]/.test(ch);
    let left: number = 0;
    let right: number = s.length - 1;
    const reversedLetters: string[] = s.split("");

    while (left < right) {
        if (isLetter(s[left]) && isLetter(s[right])) {
            reversedLetters[left] = s[right];
            reversedLetters[right] = s[left];
            left++;
            right--;
        } else if (!isLetter(s[left])) {
            left++;
        } else {
            right--;
        }
    }

    return reversedLetters.join("")
}