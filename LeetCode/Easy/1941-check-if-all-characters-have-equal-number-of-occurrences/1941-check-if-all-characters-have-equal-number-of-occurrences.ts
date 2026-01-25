function areOccurrencesEqual(s: string): boolean {

    const map = new Map();

    for (const ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    if (new Set(map.values()).size === 1){
        return true;
    }

    return false;

};