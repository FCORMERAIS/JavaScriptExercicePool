function words(n) {
    return n.split(' ')
}

function sentence(n) {
    return n.join(' ')
}

function yell (n){
    return n.toUpperCase()
}

function whisper (n) {
    return '*' + n.toLowerCase() + '*'
}

function capitalize (n){
    n = n.toLowerCase()
    var tempo = n.split('') 
    tempo[0] = tempo[0].toUpperCase()
    n = tempo.join('')
    return n
}