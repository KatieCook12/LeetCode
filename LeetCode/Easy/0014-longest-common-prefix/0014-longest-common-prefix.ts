function longestCommonPrefix(strs: string[]): string {

    let prefix: string = strs[0];
    const strLength: number = strs.length;

    for (let i = 1; i < strLength; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }

    return prefix
};