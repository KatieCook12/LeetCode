function countPoints(rings: string): number {

    const ringLength: number = rings.length;
    const poleColours = {};
    let count: number = 0;

    if (ringLength == 2) {
        console.log(0);
    }

    for (let i = 0; i < ringLength; i += 2) {
        const colour = rings[i];
        const pole = rings[i + 1];

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




};