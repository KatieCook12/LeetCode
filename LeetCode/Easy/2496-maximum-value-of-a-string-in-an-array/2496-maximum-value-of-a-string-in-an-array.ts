function maximumValue(strs: string[]): number {

    let currentMaximumValue: number = 0;

    for (const str of strs){
        if (str.match(/\d/g) && str.match(/[a-z]/g)){
            if (str.length > currentMaximumValue){
                currentMaximumValue = str.length;
            }
        }
        else if (str.match(/\d/g) && !str.match(/[a-z]/g)){
            if (+str > currentMaximumValue){
                currentMaximumValue = +str;
            }
        }
        else {
            if (str.length > currentMaximumValue){
                currentMaximumValue = str.length;
            }
        }
    }

    return currentMaximumValue;


    
};