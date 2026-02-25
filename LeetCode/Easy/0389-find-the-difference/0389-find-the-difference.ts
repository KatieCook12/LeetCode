function findTheDifference(s: string, t: string): string {

    if (new Set(t).size == 1 && s.length != 0){
        return s;
    }

    for (const ch of t){
        if(!s.includes(ch)){
            return ch;
        }
    }

};