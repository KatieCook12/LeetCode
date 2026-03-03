function findLUSlength(a: string, b: string): number {

    if ( a == b){
        return -1;
    }
    else {
        if (a.length > b.length){
            return a.length;
        } else {
            return b.length;
        }
    }
    
};