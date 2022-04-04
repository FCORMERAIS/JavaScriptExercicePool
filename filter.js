const filter = (arr, func) => {
    let res = []
    arr.map((cv,i,a) => func(cv,i,a) ? res.push(cv) : [])
    return res
}

const reject  = (arr,func) => {
    let res = []
    arr.map((cv,i,a) => func(cv,i,a) ? [] : res.push(cv))
    return res
}

const partition = (arr,func) => {
    let res = [[],[]]
    arr.map((cv,i,a) => func(cv,i,a) ? res[0].push(cv) : res[1].push(cv))
    return res
}