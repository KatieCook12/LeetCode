function percentageLetter(s: string, letter: string): number {

    let count: number = 0;

    for (const ch of s) {
        if (ch === letter) {
            count++;
        }
    }

    return Math.floor((count / s.length) * 100);

};