function differenceOfSum(nums: number[]): number {

    let elementSum: number = 0;
    let digitSum: number = 0;

    for (let num of nums) {
        elementSum += num;

        while (num !== 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
    }

    return Math.abs(elementSum - digitSum);
};