function rearrangeCharacters(s: string, target: string): number {
    const sCount: Record<string, number> = {};
    const targetCount: Record<string, number> = {};

    for (const ch of s) {
        sCount[ch] = (sCount[ch] ?? 0) + 1;
    }

    for (const ch of target) {
        targetCount[ch] = (targetCount[ch] ?? 0) + 1;
    }

    let result: number = Infinity;

    for (const ch of Object.keys(targetCount)) {
        const available = sCount[ch] ?? 0;
        const needed = targetCount[ch];

        result = Math.min(result, Math.floor(available / needed));
    }

    return result;
}