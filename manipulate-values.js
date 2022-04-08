function filterValues(obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (func(y)) {
            res[x] = y
        }
    }
}

function mapValues (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj))
        res[x] = func(y)
    return res
}

function reduceValues (obj,func,initialValue) {
    return initialValue == undefined ? Object.values(obj).reduce(func) :  Object.values(obj).concat(initialValue).reduce(func)
}