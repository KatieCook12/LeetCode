function getEncryptedString(s: string, k: number): string {

    let encryptedString: string = "";
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {
        encryptedString += s[(i + k) % sLength];
    }

    return encryptedString;
};