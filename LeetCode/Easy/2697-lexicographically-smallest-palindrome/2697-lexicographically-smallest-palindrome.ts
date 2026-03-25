function makeSmallestPalindrome(s: string): string {

    let leftIndex: number = 0;
    let rightIndex: number = s.length - 1;

    const sArray: string[] = s.split("")

    while (leftIndex < rightIndex) {
        if (sArray[leftIndex] != sArray[rightIndex]) {
            sArray[leftIndex].charCodeAt(0) < sArray[rightIndex].charCodeAt(0) ?
                sArray[rightIndex] = sArray[leftIndex]
                : sArray[leftIndex] = sArray[rightIndex];
        }
        leftIndex++;
        rightIndex--;
    }

    return sArray.join("");
};