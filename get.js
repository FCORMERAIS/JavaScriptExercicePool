const get = (src, path) => {
    let pathtempo = path.split('.')
    tempo = src
    path.forEach((element) => {
        if (tempo === 'undefined') {
            return src
        }
        tempo =src[elment]
    });
    return tempo
}