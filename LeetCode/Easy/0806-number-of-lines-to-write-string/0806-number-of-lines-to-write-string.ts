function numberOfLines(widths: number[], s: string): number[] {

    let totalPixels: number = 0;
    let lineCount: number = 1;

    for (const ch of s) {

        totalPixels += widths[ch.charCodeAt(0) - 97]

        if (totalPixels > 100) {
            lineCount++;
            totalPixels = 0;
            totalPixels += widths[ch.charCodeAt(0) - 97]
        }

    }

    return ([lineCount, totalPixels])
};