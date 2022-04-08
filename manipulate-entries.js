function filterKeys (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (func([x,y])) {
            res[x] = y
        }
    }
    return res
}

function mapKeys  (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj))
        res[func([x,y])[0]] = func([x,y])[1]
    return res
}

function reduceKeys  (obj,func,initialValue) {
    return initialValue == undefined ? Object.keys(obj).reduce(func) : Object.keys(obj).reduce(func,initialValue)
}
