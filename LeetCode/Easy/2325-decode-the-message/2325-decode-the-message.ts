function decodeMessage(key: string, message: string): void {

    const keySet = new Set(key.replaceAll(" ", ""))
    const keyArray: string[] = [...keySet];
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz"
    const decodeKey = new Map();
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