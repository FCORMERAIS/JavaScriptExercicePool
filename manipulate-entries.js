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

const totalCalories = (obj) => {
    let res = 0
    for (let [k, v] of Object.entries(obj)) {
        res += v/100*nutritionDB[k]['calories']
    }
    return Number(res.toFixed(1))
}

function lowCarbs(obj) {
    console.log
    let res = {}
    for(let [x,y] of Object.entries(obj)) {
        if (y/100*nutritionDB[x]['carbs'] < 50) {
            res[x] = y
        }
    }
    return res
}

const cartTotal = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        let tmp = {}
        for (let [kk, vv] of Object.entries(nutritionDB[k])) {
            tmp[kk] = Math.round((v/100*vv)*1000)/1000
        }
        res[k] = tmp
    }
    return res
}