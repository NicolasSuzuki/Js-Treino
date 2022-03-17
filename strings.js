function letterByLetter() {
    //TODO: split letter by letter

}

function wordByWord() {
    //TODO: split the words 

}

function separeLettersAndSort() {
    //TODO: split letters and sort them

}

function verifyWordsAreTheSame() {
    //TODO: receive 2 words and compare if they are the same

}

function isPalindrome() {
    //TODO: receive the word and verify if its a palindrome
    
}


function run() {
    const splitThisLetters = 'palaravaParaSeparar'; 
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

run();