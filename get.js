const get = (src, path) => {
    let pathtempo = path.split('.')
    let tempo = src
    pathtempo.forEach((element) => {
        if (tempo === 'undefined') {
            return src
        }
        tempo =tempo[element]
    });
    return tempo
}

console.log(get({ nested: { key: 'value' } }, 'nested.key'))