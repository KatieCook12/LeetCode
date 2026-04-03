function greatestLetter(s: string): string {
    const chars: Set<string> = new Set(s);

    for (let code = 90; code >= 65; code--) {
        const upper = String.fromCharCode(code);
        const lower = String.fromCharCode(code + 32);

        if (chars.has(upper) && chars.has(lower)) {
            return upper;
        }
    }

    return "";
}