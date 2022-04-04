const filterShortStateName  = (n) => n.filter(word => word.length < 7)
const filterStartVowel =(n) => n.filter((elem) => /[a|i|u|e|o|A|E|I|O|U]/gi.test(elem[0]))
const filter5Vowels = (n) => n.filter((elem) => elem.match(/[a|i|u|e|o|A|E|I|O|U]/gi).length>=5)
const filter1DistinctVowel = (arr) =>arr.filter(function (elem) {const chs = (str) => str.match(new RegExp(str[0], "ig")).length == str.length;return chs(elem.match(/[i|a|u|e|o]/gi).join(""));});
const multiFilter = (arrObj) =>arrObj.filter((elem) =>elem["capital"].length > 7 && !/[a|i|u|e|o]/gi.test(elem["name"][0]) &&/[a|i|u|e|o]/gi.test(elem["tag"]) && elem["region"] !== "South")