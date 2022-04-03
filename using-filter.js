const filterShortStateName  = (n) => n.filter(word => word.length < 7)
const filterStartVowel =(n) => n.filter((elem) => /[a|i|u|e|o|A|E|I|O|U]/gi.test(elem[0]))
const filter5Vowels = (n) => n.filter((elem) => /[a|i|u|e|o|A|E|I|O|U]{5}/gi.test(elem))