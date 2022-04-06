import {styles} from './pimp-my-style.data.js'
let count = 0
let addRemove = 0
export function pimp() {
    let element = document.querySelector("button");
    if (count < styles.length && addRemove == 0) {
        element.classList.add(styles[count]);
        count++
        if (count == 15) {
            addRemove = 1
            element.classList.add("unpimp");
        }
    }else {
        count--
        element.classList.remove(styles[count])
        if (count == 0) {
            addRemove = 0
            element.classList.remove("unpimp");
        }
    }
}