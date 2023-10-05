const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const vowels = ['a', 'e', 'i', 'o', 'u'];
function longestWord(sentence) {
    const words = sentence.toLowerCase().split(' ')
    let longestWords = []
    let longestLength = 0
    for (const word of words) {
        const letters = (word.split("").filter((letter) => alphabet.includes(letter))).join('')
        const length = letters.length
        if (length > longestLength) {
            longestWords = [letters]
            longestLength = length
        }
        if (length === longestLength) {
            longestWords.push(letters)
        }
    }
    if (longestWords.length === 1) {
        return longestWord[0]
    }
    let longestWordVowels = ""
    let longestWordWithHighestVowels = ""
    for (const word of longestWords) {
        const wordVowels = (word.split("").filter((letter) => vowels.includes(letter))).join('')
        if (wordVowels.length > longestWordVowels.length) {
            longestWordWithHighestVowels = word
            longestWordVowels = wordVowels
        }
    }
    return longestWordWithHighestVowels
}

/** 
 * const sentence= 'YOUR_SENTENCE_HERE'
 * console.log(longestWord(sentence))
 */
