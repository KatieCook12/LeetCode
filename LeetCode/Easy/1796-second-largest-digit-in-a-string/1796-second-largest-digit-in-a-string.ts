function secondHighest(s: string): number {
    let max: number = -1;
    let second: number = -1;

    for (const ch of s) {

        const charCode: number = ch.charCodeAt(0);

        if (charCode >= 48 && charCode <= 57) {
            if (+ch > max) {
                second = max;
                max = +ch;
            } else if (+ch < max && +ch > second) {
                second = +ch;
            }
        }
    }

    return second;
}