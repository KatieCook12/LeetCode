function sortSentence(s: string): string {

    let map = new Map<string, string>();

    for (const str of s.split(" ")) {
        map.set(str.slice(str.length - 1), str.slice(0, -1));
    }

    const sortedMap = new Map<string, string>(
        [...map.entries()].sort(
            ([a], [b]): number => Number(a) - Number(b)
        )
    );

    return [...sortedMap.values()].join(" ");

};