function defaultCurry (obj) {
    return (replace) => {
        let res = Object.assign({},obj)
        Object.keys(replace).forEach((k)=>res[k]=replace[k])
        return res
    }
}

function mapCurry (func) {
    return (obj) => Object.fromEntries(Object.entries(obj).map(func))
}

function reduceCurry (func,initialValue) {
    return (obj) => Object.values(obj).reduce(func,initialValue)
}

function filterCurry (func) {
    return (obj,iv) => Object.entries(obj).reduce(func, iv)
}

function reduceScore (obj,initialValue) {
    return (obj) => Object.values(obj).reduce((a,b) => a+b,initialValue)
}

function filterForce (obj) {
    return (obj) => Object.fromEntries(Object.entries(obj) > 80 ? obj : {})
}

function mapAverage(obj) {
    return (obj) => Object.fromEntries(Object.entries(obj).map(([k,v]) => [k,v/Object.keys(obj).length]))
}