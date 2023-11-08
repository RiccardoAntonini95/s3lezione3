// icona <ion-icon name="trash-outline"></ion-icon>


const generaTesto = (parametro) => {
    const taskDaAggiungere = document.createElement("li")
    taskDaAggiungere.innerText = document.querySelector("#testoTask").value
    taskDaAggiungere.classList.add("listaTask")
    document.querySelector("ul").appendChild(taskDaAggiungere)
    parametro.preventDefault()
}

const eliminaTask = (parametro) => {
    const iconaTrash = document.createElement("button")
    iconaTrash.innerHTML = "<button>Elimina</button>"
    iconaTrash.classList.add("removeButton")
    const binButton = document.querySelectorAll("li")
    for(let i = 0; i < binButton.length; i++){
    binButton[i].appendChild(iconaTrash)
    }
    parametro.preventDefault()
}

const cancellaTask = () => {
    const taskDatogliere = document.getElementsByClassName("listaTask")
    for(let i = 0; i < taskDatogliere.length; i++){
    if(taskDatogliere[i].style.textDecoration === "line-through"){
        taskDatogliere[i].style.textDecoration = "none"
    } else{
        taskDatogliere[i].style.textDecoration = "line-through"
    }}
}

const bottoneRimuovi = () => {
    const taskToggle = document.getElementsByClassName("removeButton")
    for(let i = 0; i < taskToggle.length; i++){
        taskToggle[i].remove()
    }
}




const bottone = document.getElementById("btn-submit")
bottone.addEventListener("click", generaTesto)
bottone.addEventListener("click", eliminaTask)

const taskRemove = document.getElementsByClassName("listaTask")
for(let i = 0; i < taskRemove.length; i++){
taskRemove.addEventListener("click", cancellaTask)
}
