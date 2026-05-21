function getEncryptedString(s: string, k: number): string {

    const encryptedString: string[] = [];
    const sLength: number = s.length;

    for (let i = 0; i < sLength; i++) {
        encryptedString.push(s[(i + k) % sLength]);
    }

    return encryptedString.join("");
};