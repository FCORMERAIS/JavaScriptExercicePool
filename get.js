const get = (src,path) => {
    let pathtempo = path.split(".")
    let res = src
    pathtempo.forEach((element) => {
        if (res === undefined) {
            return res
        }
        res = res[element]
    });
    return res
}