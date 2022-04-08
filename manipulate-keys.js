function filterKeys (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (func(x)) {
            res[x] = y
        }
    }
    console.log(obj,func)
    return res
}

function mapKeys  (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj))
        res[func(x)] = v
    return res
}

function reduceKeys  (obj,func,initialValue) {
    return initialValue == undefined ? Object.values(obj).reduce(func) : Object.values(obj).reduce(func,initialValue)
}