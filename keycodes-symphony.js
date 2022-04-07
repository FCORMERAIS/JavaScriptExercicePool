export function compose(){
    document.addEventListener("keydown", (event)=>{
        let keypressed = event.key
        if (keypressed == "Backspace"){
            document.querySelectorAll("div")[document.querySelectorAll("div").length-1].remove()
        }else if (keypressed == "Escape"){
            document.querySelectorAll("div").forEach((element) => {
                element.remove()
            })
        }else {
            let elem = document.createElement('div')
            elem.textContent = keypressed
            elem.classList.add("note")
            elem.style.background = "#"+"15"+event.keyCode
            document.body.appendChild(elem)
            elem.innerHTML = keypressed
        }
    })
}
