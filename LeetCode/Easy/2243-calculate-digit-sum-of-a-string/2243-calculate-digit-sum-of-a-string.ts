function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let next: string = "";

        for (let i = 0; i < s.length; i += k) {
            let sum: number = 0;

            for (let j = i; j < i + k && j < s.length; j++) {
                sum += s.charCodeAt(j) - 48;
            }

            next += sum;
        }

        s = next;
    }

    return s;
}