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
    var tempo = words(n) 
    tempo[0] = toUpperCase()
    n = tempo.Join('')
    return n
}