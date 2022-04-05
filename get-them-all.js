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
    var elements = document.querySelectorAll('a.classical')
    var elements2 = document.querySelectorAll("a:not(.classical)")
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

export function getActive() {
    var elements = document.querySelectorAll('a.classical.active')
    var elements2 = document.querySelectorAll("a.classical:not(.active)")
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

export const getBonannoPisano = () => {
    let arr1 = [];
    let arr2 = [];
    let elements = document.querySelectorAll("a#BonannoPisano.classical.active");
    let elements2 = document.querySelectorAll("a:not(#BonannoPisano).classical.active");
    for (let elem of elements) {
      arr1.push(elem);
    }
    for (let elem of elements2) {
      arr2.push(elem);
    }
    return [arr1[0], arr2];
  };