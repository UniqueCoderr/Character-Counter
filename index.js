const txtarea = document.getElementById("txtarea")
const tot_ch = document.getElementById("total_char")
const r = document.getElementById("rem")

txtarea.addEventListener("keyup", ()=>{
    updateCounter()
})

    updateCounter()

function updateCounter(){
    tot_ch.innerText=txtarea.value.length
    r.innerText=txtarea.getAttribute("maxlength")- txtarea.value.length
}