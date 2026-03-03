function findLUSlength(a: string, b: string): number {

    if (a == b) {
        return -1;
    }
    else {
        return a.length > b.length ? a.length : b.length;
    }

};