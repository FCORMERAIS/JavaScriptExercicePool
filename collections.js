const arrToSet = (n) => Set(n)
const arrToStr = (n) => n.join('')
const setToArr = (n) => Array.from(n);
const setToStr = (n) => n.join('')
const strToArr = (n) => Array(n)
const strToSet = (n) => Set(n)
const mapToObj = (n) => Object(n)
const objToArr = (n) => Array(n)
const objToMap = (n) => Map(n)
const arrToObj = (n) => Object(n)
const strToObj = (n) => Object(n)

function superTypeOf(n) {
    return typeof n
}