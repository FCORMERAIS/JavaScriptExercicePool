function filterEntries  (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (func([x,y])) {
            res[x] = y
        }
    }
    return res
}

function mapEntries (obj,func) {
    let res = {}
    for(let [x,y] of Object.entries(obj))
        res[func([x,y])[0]] = func([x,y])[1]
    return res
}

function reduceEntries   (obj,func,initialValue = '') {
    let arr = Object.entries(obj)
    for(let i of arr) {
        initialValue = func(initialValue,i)
    }
    return initialValue
}

function totalCalories (obj) {
    let total = 0
    for(let [x,y] of Object.entries(obj)) {
        total += y.calories
    }
    return total
}

function lowCarbs(obj) {
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (y.carbs < 50) {
            res[x] = y
        }
    }
    return res
}