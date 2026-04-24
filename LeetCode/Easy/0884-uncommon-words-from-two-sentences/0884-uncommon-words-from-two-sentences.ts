function uncommonFromSentences(s1: string, s2: string): string[] {

    let count: Record<string, number> = {};

    for (const word of s1.split(" ")) {
        count[word] = (count[word] ?? 0) + 1;
    }

    for (const word of s2.split(" ")) {
        count[word] = (count[word] ?? 0) + 1;
    }

    return Object.keys(count).filter(word => count[word] === 1);
}