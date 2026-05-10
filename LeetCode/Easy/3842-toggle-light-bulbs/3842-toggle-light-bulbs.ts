function toggleLightBulbs(bulbs: number[]): number[] {

    let bulbStatus: Record<string, boolean> = {};

    for (const bulb of bulbs) {
        bulbStatus[bulb] = bulbStatus[bulb] !== true;
    }

    return Object.entries(bulbStatus)
        .filter(([bulb, status]) => status === true)
        .map(([bulb]) => Number(bulb));
};