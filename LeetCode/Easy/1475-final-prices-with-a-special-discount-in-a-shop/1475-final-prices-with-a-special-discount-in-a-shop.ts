function finalPrices(prices: number[]): number[] {
    const discountedPrices = [...prices];
    const pricesLength: number = prices.length;

    for (let i = 0; i < pricesLength; i++) {
        const discount: number = prices
            .slice(i + 1)
            .find(price => price <= prices[i]);

        discountedPrices[i] = prices[i] - (discount ?? 0);
    }

    return discountedPrices;
}