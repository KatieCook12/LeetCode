function removeOuterParentheses(s: string): string {

    let depth: number = 0;
    let result: string = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {

            if (depth++) {
                result += "(";
            }
        }

        else {

            if (--depth) {
                result += ')';
            }
            
        }

    }

    return result;

};