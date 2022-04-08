function filterKeys(obj,func) {
    let res = {}
    for(let [x,y] of Object.keys(obj)) {
        if (func(y)) {
            res[x] = y
        }
    }
    return res
}

function mapKeys(obj,func) {
    let res = {}
    for(let [x,y] of Object.keys(obj))
        res[x] = func(y)
    return res
}

function reduceKeys(obj,func,initialValue) {
    return initialValue == undefined ? Object.keys(obj).reduce(func) : Object.keys(obj).reduce(func,initialValue)
}