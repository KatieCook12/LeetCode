function areOccurrencesEqual(s: string): boolean {

    const map = new Map<string, number>();

    for (const ch of s) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    return new Set(map.values()).size === 1;

}
