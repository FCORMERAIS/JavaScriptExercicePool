const arrToSet = (n) => new Set(n)
const arrToStr = (n) => n.join('')
const setToArr = (n) => Array.from(n);
const setToStr = (n) => setToArr(n).join('')
const strToArr = (n) => n.split('')
const strToSet = (n) => new Set(strToArr(n))
const mapToObj = (n) => Object.fromEntries(n);
const objToArr = (n) => Object.values(n)
const objToMap = (n) => new Map(Object.entries(n))
const arrToObj = (n) => Object.assign({},n)
const strToObj = (n) => Object.assign({},strToArr(n))

function superTypeOf(n) {
    if (n == null){
        return 'null'
    }
    else if (n instanceof Map == true) {
        return 'map'
    }
    return string(typeof(n)
}