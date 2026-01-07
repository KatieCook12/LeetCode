function largestOddNumber(num: string): string {

    const numLength: number = num.length - 1;

    for (let i = numLength; i >= 0; i--) {

        if (Number(num[i]) % 2 != 0) {
            return num;
        }
        else {
            num = num.slice(0, -1);
        }
        
    }

    return num;
};