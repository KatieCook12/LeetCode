function accountBalanceAfterPurchase(purchaseAmount: number): number {

    return (10 - (Math.round(purchaseAmount / 10))) * 10;

};