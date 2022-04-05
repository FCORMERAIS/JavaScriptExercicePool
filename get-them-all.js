export function getArchitects() {
    var elements = document.getElementsByTagName("a")
    var elements2 = document.getElementsByTagName("span")
    let arr1 = []
    let arr2 = []
    for (let architect of elements) {
        arr1.push(architect)
    }
    for (let architect of elements2) {
        arr2.push(architect)
    }
    return [arr1,arr2]
}

export function getClassical() {
}

export function getActive() {

}

export function getBonannoPisano() {

}