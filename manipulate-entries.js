function filterEntries  (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (func([x,y])) {
            res[x] = y
        }
    }
    return res
}

function mapEntries   (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj))
        res[func([x,y])[0]] = func([x,y])[1]
    return res
}

function reduceEntries   (obj,func,initialValue) {
    return initialValue == undefined ? Object.keys(obj).reduce(func) : Object.keys(obj).reduce(func,initialValue)
}
