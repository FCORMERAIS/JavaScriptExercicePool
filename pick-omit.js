function pick(obj, str) {
    let res = {}
    if (typeof str == "string") {
        str = [str]
    }
    Object.keys(obj).forEach((str)=> str.forEach((k)=> str == k ? res[k]=obj[k] : ""))
    return res
}

function omit() {
    let res = {}
    if (typeof str == "string") {
        str = [str]
    }
    Object.keys(obj).forEach((str)=> str.forEach((k)=> str != k ? res[k]=obj[k] : ""))
    return res
}
const forEach = (arr, func) => {
    let res = []
    arr.map((cv,i,a) => res.push(func(cv,i,a)))
    return res
}