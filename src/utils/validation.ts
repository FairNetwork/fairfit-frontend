export const isValidIBAN = (iban: string): boolean => {
    // Entferne Leerzeichen und konvertiere zu Großbuchstaben
    iban = iban.replace(/\s+/g, '').toUpperCase();

    // Prüfe, ob die IBAN die richtige Länge hat (mindestens 4 Zeichen)
    if (iban.length < 4) {
        return false;
    }

    // Prüfe, ob die ersten beiden Zeichen alphabetische Zeichen sind
    const firstTwoChars = iban.substring(0, 2);
    if (!/^[A-Z]+$/.test(firstTwoChars)) {
        return false;
    }

    // Vertausche die ersten 4 Zeichen durch ihre numerischen Werte (A=10, B=11, usw.)
    const rearrangedIBAN =
        iban.substring(4) +
        iban.substring(0, 4).replace(/[A-Z]/g, (char) => (char.charCodeAt(0) - 55).toString());

    // Prüfe, ob die numerische IBAN durch 97 teilbar ist
    const remainder = parseInt(rearrangedIBAN) % 97;

    return remainder === 1;
};
