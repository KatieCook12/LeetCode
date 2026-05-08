function stableMountains(height: number[], threshold: number): number[] {

    const stableMountains: number[] = [];
    const heightLength: number = height.length;

    for (let i = 1; i < heightLength; i++) {
        if (height[i - 1] > threshold) {
            stableMountains.push(i)
        }

    }

    return stableMountains;
};