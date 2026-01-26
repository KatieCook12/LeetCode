function checkString(s: string): boolean {

    const sLength: number = s.length;

    for (let i=0; i < sLength; i++){

        if (s[i] === "b" && s[i + 1] === "a"){
            return false;
        }

    }

    return true;
    
};