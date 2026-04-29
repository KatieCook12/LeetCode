function minTimeToType(word: string): number {
    let minimumTime: number = 0;
    let current: number = 1;
    const wordLength: number = word.length;

    for (let i = 0; i < wordLength; i++) {
        const target: number = word[i].charCodeAt(0) - 96;
        const clockwise: number = Math.abs(current - target);
        const anticlockwise: number = 26 - clockwise;

        minimumTime += Math.min(clockwise, anticlockwise);
        minimumTime++;

        current = target;
    }

    return minimumTime;
}