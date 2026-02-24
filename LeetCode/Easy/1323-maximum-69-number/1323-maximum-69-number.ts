function maximum69Number (num: number): number {

    const numArray: string[] = num.toString().split("");

    numArray[numArray.indexOf("6")] = "9";

    return +numArray.join("");
    
};