const get = (src, path) => {
    let pathtempo = path.split('.')
    let tempo = src
    path.forEach((element) => {
        if (tempo === 'undefined') {
            return src
        }
        tempo =src[elment]
    });
    return tempo
}