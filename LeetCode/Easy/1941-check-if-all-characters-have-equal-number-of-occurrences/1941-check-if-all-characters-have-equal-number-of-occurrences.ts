function areOccurrencesEqual(s: string): boolean {

    const map = new Map<string, number>();

    for (const ch of s) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    const it = map.values();
    const first = it.next().value;

    for (const v of it) {
        if (v !== first) return false;
    }

    return true;
    
}
