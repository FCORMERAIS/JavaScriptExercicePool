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
    let tempo = n.split(' ') 
    for (let index = 0; index < tempo.length; index++) {
        let tempo2 = tempo[index].split("")
        tempo2[index][0].toUpperCase()
        string.charAt(0).toUpperCase() + string.slice(1);
    }
    n = tempo.join('')
    return n
}