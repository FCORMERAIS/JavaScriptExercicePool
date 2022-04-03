const filterShortStateName  = (n) => n.filter(word => word.length < 7)
const filterStartVowel =(n) => n.filter((elem) => /[a|i|u|e|o]/gi.test(elem[0]))