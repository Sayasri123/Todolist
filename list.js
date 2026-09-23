let data = document.getElementById("task")
let btn = document.getElementById("task-btn")
btn.addEventListener("click",Add)
function Add(){
    let value = document.getElementById("task").value
    let li = document.createElement("li")
    let Dbtn = document.createElement("button")
    let Rbtn = document.createElement("button")

    if(data.value !=""){
        li.textContent=value
        Dbtn.textContent="Done"

        Dbtn.classList.add("done-btn");
        li.append(Dbtn)
        Dbtn.addEventListener("click",Done)
        function Done(){
            li.style.textDecoration="line-through"   
        }

        Rbtn.textContent="Delete"
        Rbtn.classList.add("delete-btn");
        
        li.append(Rbtn)
        Rbtn.addEventListener("click",empty)
        function empty(){
            li.remove()
        }

        document.getElementById("list").append(li)
        data.value=""


    }
}