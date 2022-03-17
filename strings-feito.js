function letterByLetter(splitLetter) {
    //TODO: split letter by letter
    return splitLetter.split("")
}

const splitedWord = (splitMyLetter) => splitMyLetter.split("")

function wordByWord(splitWord) {
    //TODO: split the words 
    return splitWord.split(" ")
}

const MywordByWord = (wordWord) => wordWord.split(" ")

function separeLettersAndSort(sortAndSplitWord) {
    //TODO: split letters and sort them
    return sortAndSplitWord.split("").sort((a,b) => a.localeCompare(b)) //vai dar errado
}

const wordInLetterSorted = (letterWord) => letterWord.split("").sort((a,b)=> a.localeCompare(b))

function verifyWordsAreTheSame(comparedWord, wordForComparation) {
    //TODO: receive 2 words and compare if they are the same
    if(comparedWord === wordForComparation){
        console.log(`\n${comparedWord} é igual a ${wordForComparation}`)
    }else{
        console.log(`\n${comparedWord} não é igual a ${wordForComparation}`)
    }

}

const verifyWord = (wordToBeVerified, newWordForVerifing) => {
    if (wordToBeVerified === newWordForVerifing) {
        return  `${wordToBeVerified} é igual a ${newWordForVerifing}.`
}
    else{
        return `${wordToBeVerified} não é igual a ${newWordForVerifing}.`
    }
}

function isPalindrome(isAnPalindrome) {
    //TODO: receive the word and verify if its a palindrome
    let word = isAnPalindrome
    if(word === word.split("").reverse().join("")){
        console.log(`\n${word} é um palindromo.`)
    }else{
        console.log(`\n${word} não é um palindromo.`)
    }
    
}

const palindrome = (word) => { 
    if (word === word.split("").reverse().join("")){
        return `${word} é um palindromo ${word.split("").reverse().join("")}`
    }else{
        return `${word} não é um palindromo.`
    }
}
/*
function run() {
    const splitThisLetters = 'palavraParaSeparar'; 
    const splitThisWords = 'Separe as palavras'; 
    const splitThisLettersAndSort = 'palaravaParaSepararEOrdene';
    const compareThisWord = 'palavra';
    const withThisWord = 'palavra';
    const andWithThisWord = 'word';
    const verifyIfThisWordIsPalindrome = 'radar';
    const andverifyIfThisWordIsPalindrome = 'Quatro';

    console.log(
     letterByLetter(splitThisLetters),
     wordByWord(splitThisWords),
     separeLettersAndSort(splitThisLettersAndSort),
     verifyWordsAreTheSame(compareThisWord, withThisWord),
     verifyWordsAreTheSame(compareThisWord, andWithThisWord),
     isPalindrome(verifyIfThisWordIsPalindrome),
     isPalindrome(andverifyIfThisWordIsPalindrome),
    );
    
}

*/
const splitThisLetters = 'palavraParaSeparar'; 
const splitThisWords = 'Separe as palavras'; 
const splitThisLettersAndSort = 'palaravaParaSepararEOrdene';
const compareThisWord = 'palavra';
const withThisWord = 'palavra';
const andWithThisWord = 'word';
const verifyIfThisWordIsPalindrome = 'radar';
const andverifyIfThisWordIsPalindrome = 'Quatro';


console.log(
    `\n1 ${splitedWord(splitThisLetters)}\n`,
    `\n2 ${MywordByWord(splitThisWords)}\n`,
    `\n3 ${wordInLetterSorted(splitThisLettersAndSort)}\n`,
    `\n4 ${verifyWord(compareThisWord, withThisWord)}\n`,
    `\n5 ${verifyWord(compareThisWord, andWithThisWord)}\n`,
    `\n6 ${palindrome(verifyIfThisWordIsPalindrome)}\n`,
    `\n7 ${palindrome(andverifyIfThisWordIsPalindrome)}\n`

)

//run();
