function maxDepth(s: string): number {

    let currentDepth: number = 0
    let maxDepth: number = 0

    for (const ch of s) {
        if (ch == "(") {
            currentDepth++;
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        }
        else if (ch == ")") {
            currentDepth--;
        }
    }

    return maxDepth;

};