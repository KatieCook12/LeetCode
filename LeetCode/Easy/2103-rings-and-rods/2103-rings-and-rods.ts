function countPoints(rings: string): number {
    const poleColours: Record<string, { Red: boolean; Green: boolean; Blue: boolean }> = {};
    let count: number = 0;

    for (let i = 0; i < rings.length; i += 2) {
        const colour: string = rings[i];
        const pole: string = rings[i + 1];

        poleColours[pole] ??= {
            Red: false,
            Green: false,
            Blue: false
        };

        if (colour === "R") poleColours[pole].Red = true;
        if (colour === "G") poleColours[pole].Green = true;
        if (colour === "B") poleColours[pole].Blue = true;
    }

    for (const pole in poleColours) {
        const colours = poleColours[pole];
        if (colours.Red && colours.Green && colours.Blue) {
            count++;
        }
    }

    return count;
}