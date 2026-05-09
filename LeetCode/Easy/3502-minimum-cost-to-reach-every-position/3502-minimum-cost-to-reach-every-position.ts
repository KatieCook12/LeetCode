function minCosts(cost: number[]): number[] {

    const costLength: number = cost.length - 1;

    for (let i = 0; i < costLength; i++) {
        cost[i + 1] = Math.min(cost[i], cost[i + 1]);
    }

    return cost;
};