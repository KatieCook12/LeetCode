function makeSmallestPalindrome(s: string): string {
    let left: number = 0;
    let right: number = s.length - 1;
    const arr: string[] = s.split("");

    while (left < right) {
        arr[left] < arr[right] ? arr[right] = arr[left] : arr[left] = arr[right]
        left++;
        right--;
    }

    return arr.join("");
}