function decodeMessage(key: string, message: string): string {

    const keyArray: string[] = [...new Set(key.replaceAll(" ", ""))];
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz"
    const decodeKey: Map <string, string> = new Map();
    const decodedMessage: string[] = [];
    const keyArrayLength: number = keyArray.length;

    for (let i = 0; i < keyArrayLength; i++) {
        decodeKey.set(keyArray[i], alphabet[i])
    }

    for (const ch of message) {
        if (decodeKey.get(ch) != undefined) {
            decodedMessage.push(decodeKey.get(ch))
        }
        else {
            decodedMessage.push(" ")
        }
    }

    return decodedMessage.join("");

};