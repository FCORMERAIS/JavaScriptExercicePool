const arrToSet = (n) => new Set(n)
const arrToStr = (n) => n.join('')
const setToArr = (n) => Array.from(n);
const setToStr = (n) => setToArr(n).join('')
const strToArr = (n) => n.split('')
const strToSet = (n) => new Set(strToArr(n))
const mapToObj = (n) => Object.fromEntries(n);
const objToArr = (n) => Array(n)
const objToMap = (n) => Map(n)
const arrToObj = (n) => Object(n)
const strToObj = (n) => Object(n)

function superTypeOf(n) {
    return typeof n
}