let button = document.getElementById('click-button')
button.addEventListener("click",()=>{
    let text = document.getElementById("text")
    if(text.style.color == "blue"){
        text.style.color = "red"
    }
    else{
        text.style.color = "blue"
    }

})