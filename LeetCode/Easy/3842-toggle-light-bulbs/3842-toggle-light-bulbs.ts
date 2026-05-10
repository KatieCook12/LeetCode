function toggleLightBulbs(bulbs: number[]): number[] {

    const onBulbs: Set<number> = new Set();

    for (const bulb of bulbs) {
        onBulbs.has(bulb) ? onBulbs.delete(bulb) : onBulbs.add(bulb);
    }

    return [...onBulbs].sort((a, b) => a - b);
};