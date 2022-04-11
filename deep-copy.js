const superTypeOf = (arg) => toString.call(arg).slice(8, -1)

function deepCopy (thing) {
    let res
    if (superTypeOf(thing) == "Object") {
        res = {}
        Object.keys(thing).forEach((k)=>res[k]=deepCopy(thing[k]))
    }
    else if (superTypeOf(thing) == "Array") {
        res = []
        for (let i of thing) {
            res.push(deepCopy(i))
        }    
    }else {
        res = thing
    }
    return res
}