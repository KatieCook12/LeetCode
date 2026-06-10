function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {

    const weightsMap: Record<string, number> = {};

    function mappingFunction(arr: number[][]): void {
        for (const [id, weight] of arr) {
            weightsMap[id] = (weightsMap[id] ?? 0) + weight;
        }
    }

    mappingFunction(items1);
    mappingFunction(items2);

    return Object.entries(weightsMap).map(([id, weight]) => [
        +id,
        weight
    ]);
};