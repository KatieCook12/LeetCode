function minElement(nums: number[]): number {

    let minElement: number = Infinity;

    for (let num of nums) {

        let sum: number = 0;

        while (num !== 0) {
            let digit = num % 10;
            sum += digit;
            num = Math.floor(num / 10);
        }

        if (sum < minElement) {
            minElement = sum;
        }

    }

    return minElement;
};