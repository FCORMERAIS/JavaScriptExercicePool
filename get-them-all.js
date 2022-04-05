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
    var element = document.getElementsByClassName('a.classical')
    var element2 = document.getElementsByClassName("a:not(.classical)")
    for (let architect of elements) {
        arr1.push(architect)
    }
    for (let architect of elements2) {
        arr2.push(architect)
    }
    return [arr1,arr2]
}

export function getActive() {
    var element = document.getElementsByClassName('a.classical.active')
    var elemnt2 = document.getElementsByClassName("a.classical:not(.active)")
    for (let architect of elements) {
        arr1.push(architect)
    }
    for (let architect of elements2) {
        arr2.push(architect)
    }
    return [arr1,arr2]
}

export function getBonannoPisano() {
    var container = document.querySelector("#BonannoPisano");
    var elements2 = container.querySelectorAll("a:not(#BonannoPisano).classical.active");
    for (let architect of elements2) {
        arr2.push(architect)
    }
    return [container,arr2]
}