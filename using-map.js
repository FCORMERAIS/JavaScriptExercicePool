function citiesOnly(arr) {
    return arr.map(function (elem) {
        return elem["city"];
    })
}

const upperCasingStates = (n) => {
    let tempo = []
    let res = []
    let tempo2 = ''
    for (let index = 0; index < n.length; index++) {
        tempo = capitalize(n[index])
        res.push(tempo)
    }
    return res
}

function capitalize (n){
    n = n.toLowerCase()
    var tempo = n.split('') 
    tempo[0] = tempo[0].toUpperCase()
    n = tempo.join('')
    return n
}