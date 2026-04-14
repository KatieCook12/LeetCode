function firstMatchingIndex(s: string): number {

    let left: number = 0;
    let right: number = s.length - 1;

    while (left <= right) {
        if (s[left] == s[right]) {
            return left;
        }
        left++;
        right--;
    }

    return -1;
};