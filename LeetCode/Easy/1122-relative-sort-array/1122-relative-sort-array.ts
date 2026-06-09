function relativeSortArray(arr1: number[], arr2: number[]): number[] {

    const indexMapping = new Map();
    const arr2Length: number = arr2.length;

    for (let i = 0; i < arr2Length; i++) {
        indexMapping.set(arr2[i], i);
    }

    arr1.sort((a, b) => {
        const aIndex = indexMapping.get(a);
        const bIndex = indexMapping.get(b);

        if (aIndex !== undefined && bIndex !== undefined) {
            return aIndex - bIndex;
        }

        if (aIndex !== undefined) return -1;
        if (bIndex !== undefined) return 1;
        return a - b;
    });

    return arr1;
};