function checkIfPangram(sentence: string): boolean {

    const seen = new Set<string>();

    for (const ch of sentence) {
        seen.add(ch);
    }

    return seen.size === 26 ? true : false;
   
};