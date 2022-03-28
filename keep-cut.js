const cutFirst = (n) => n.slice(2,n.length)
const cutLast = (n) => n.slice(0, n.length-2)
const cutFirstLast = (n) => {
    n = cutFirst(n)
    n = cutLast(n)
    return n
}
const keepFirst = (n) => n.slice(0,2)
const keepLast = (n) => n.slice(n.length-2,n.length)
const keepFirstLast = (n) => {
    let a = keepFirst(n)
    let b = keepLast(n)
    if (n.length <=2) {
        return n
    }
    n = a+b
    return n
}