const vowels = /[aeiouAEIOU]/g
function vowelDots(str){
    const res = str.match(vowels)
    if (res == null) {
        return str
    }
    let ret = ''
    let tempo = 0
    if(res === null){
        return str
    }
    for(let i = 0;i<str.length;i++){
        if(str[i]!==res[tempo]){
            ret += str[i]
        }
        if(str[i]===res[tempo]){
            ret += str[i]+'.'
            tempo++
        }
    }
    return ret
}