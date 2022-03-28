let result = []
const cutFirst = (n) => {
    n = n.split("")
    n.reverse()
    return(n.reverse(cutLast(n)))
}

const cutLast = (n) => {
    n = n.split("")
    n.length = n.length-2;
    return n
}

const cutFirstLast = (n) => {
    n = n.split("")
    n = cutFirst(n)
    n = cutLast(n)
    return n
}

const keepFirst = (n) => {
    n = n.split("")
    result.push(n[0],n[1])
    return result.join("")
}

const keepLast = (n) => {
    n = n.split("")
    result.push(n[-1],n[-2])
    return result.join("")
}

const keepFirstLast = (n) => {
    n = n.split("")
    result.push(n[0],n[1])
    result.push(n[-1],n[-2])
    return result.join("")
}