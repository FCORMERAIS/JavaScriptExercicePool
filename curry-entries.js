function defaultCurry (obj,replace) {
    for(let [objKey,objValue] of Object.entries(obj)) {
        for(let [replaceKey,replaceValue] of Object.entries(replace)) {
            if (objKey == replaceKey) {
                obj[objKey] = replaceValue 
            }
        }
    }
    return obj
}