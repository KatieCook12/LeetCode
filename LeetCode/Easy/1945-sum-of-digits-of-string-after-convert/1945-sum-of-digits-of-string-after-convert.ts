function getLucky(s: string, k: number): number {

    let currentNumber: number[] = [];

    for (const ch of s){
        (ch.charCodeAt(0) - 96).toString().split("").forEach(num => currentNumber.push(+num));
    }

    while ( k > 0){
        let currentValue = 0;
        currentNumber.forEach(num => currentValue += num)
        currentNumber = currentValue.toString().split("").map(Number)
        k--;
    }

    return +currentNumber.join("")
};