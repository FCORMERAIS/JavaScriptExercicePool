const get = (src, path) => {
    let pathtempo = path.split('.')
    let tempo = src
    pathtempo.forEach((element) => {
        if (tempo === 'undefined') {
            return src
        }
        tempo =src[elment]
    });
    return tempo
}