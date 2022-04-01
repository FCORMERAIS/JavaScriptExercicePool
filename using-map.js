const citiesOnly = (n) => {
    let res = []
    console.log(n[0])
    for (let index = 0; index <  n.length; index++) {
        res.push(n[index].key)
    }
    return res
}

const upperCasingStates = (n) => {
    let tempo = []
    let res = []
    let tempo2 = ''
    let res2 = []
    for (let index = 0; index < n.length; index++) {
        tempo = n[index].split(" ")
        for (let i = 0; i < tempo.length; i++) {
            tempo2 = tempo[i].split("")
            tempo2[0].toUpperCase()
            res2.push(tempo2.join(""))
        }
        res.push(res2.join(""))
    }
    return res
}