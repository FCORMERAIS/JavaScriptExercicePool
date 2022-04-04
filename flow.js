const flow = (arr) => (...args) => {
    let tempo = arr[0](...args)
    arr = arr.slice(1)
    for (let each of arr) {
        tempo = each.apply(this, [tempo])
    }
    return tempo
}