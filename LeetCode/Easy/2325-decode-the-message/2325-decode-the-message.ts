function decodeMessage(key: string, message: string): string {

    const keyArray: string[] = [...new Set(key.replaceAll(" ", ""))];
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const decodeKey: Map<string, string> = new Map();
    const decodedMessage: string[] = [];

    keyArray.forEach((value, index) => {
        decodeKey.set(value, alphabet[index])
    })

    for (const ch of message) {
        if (ch != " ") {
            decodedMessage.push(decodeKey.get(ch))
        }
        else {
            decodedMessage.push(" ")
        }
    }

    return decodedMessage.join("");

};