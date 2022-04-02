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
        tempo = capitalizeWord(n[index])
        res.push(tempo)
    }
    return res
}

function capitalizeWord (n){
    n = n.toLowerCase()
    var tempo = n.split(' ') 
    console.log(tempo)
    tempo[0] = tempo[0].toUpperCase()
    n = tempo.join('')
    return n
}