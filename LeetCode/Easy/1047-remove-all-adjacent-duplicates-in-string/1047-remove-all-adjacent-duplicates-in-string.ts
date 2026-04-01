function removeDuplicates(s: string): string {
    const stack: string[] = [];

    for (const ch of s) {
        const stackLength: number = stack.length;
        stackLength > 0 && stack[stackLength - 1] === ch ? stack.pop() : stack.push(ch);
    }

    return stack.join("");
}