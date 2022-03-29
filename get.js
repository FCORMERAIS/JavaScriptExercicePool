const get = (src, path) => {
    path.split('.')
    path.forEach((element) => {
        if (src === 'undefined') {
            return src
        }
        src =src[elment]
    });
    return src
}