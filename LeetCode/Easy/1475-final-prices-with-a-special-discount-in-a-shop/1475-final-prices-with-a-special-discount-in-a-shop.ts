function finalPrices(prices: number[]): number[] {
    const discountedPrices: number[] = [...prices];
    const pricesLength: number = prices.length;

    for (let i = 0; i < pricesLength; i++) {
        for (let j = i + 1; j < pricesLength; j++) {
            if (prices[j] <= prices[i]) {
                discountedPrices[i] = prices[i] - prices[j];
                break;
            }
        }
    }

    return discountedPrices;
}