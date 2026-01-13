function countKeyChanges(s: string): number {

    s = s.toLowerCase();

    let count: number = 0;
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {

        if (s[i] != s[i + 1]) {
            count++;
        }

    }

    return count - 1;
};