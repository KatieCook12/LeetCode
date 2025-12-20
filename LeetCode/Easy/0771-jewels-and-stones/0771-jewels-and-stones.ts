function numJewelsInStones(jewels: string, stones: string): number {

    let count: number = 0;

    for (const s of stones) {
        checkJewels(s);
    }

    function checkJewels(s: string): void {

        const jewelsArray: string[] = jewels.split("");

        for (const j of jewelsArray) {
            if (s === j) {
                count++;
            }
        }

    }

    return count;

};