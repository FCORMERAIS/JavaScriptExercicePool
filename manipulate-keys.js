function filterKeys(obj,func) {
    let res = {}
    for(let [x,y] of Object.keys(obj)) {
        if (func(x)) {
            res[y] = x
        }
    }
    return res
}

function mapKeys(obj,func) {
    let res = {}
    for(let [x,y] of Object.keys(obj))
        res[y] = func(x)
    return res
}

function reduceKeys(obj,func,initialValue) {
    return initialValue == undefined ? Object.keys(obj).reduce(func) : Object.keys(obj).reduce(func,initialValue)
}