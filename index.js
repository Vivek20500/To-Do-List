document.querySelector("button").addEventListener("click",line)
document.addEventListener("keypress",e=>{
    if(e.key==="Enter"){
        line();
    }
})
function line(){
    var old=document.querySelector(".task-list").innerHTML
    var newTask=document.querySelector("input").value
    if(newTask==""){
        alert("Please enter a task")
    }else{
        document.querySelector(".task-list").innerHTML=old+"<li>"+newTask+"</li>";
        var listItem=document.querySelectorAll("li")
        listItem.forEach(element=>{
            element.addEventListener("click",()=>{
                if(element.style.textDecoration=="line-through"){
                    element.style.textDecoration="none";
                }else{
                    element.style.textDecoration="line-through";
                }
            })
        })
    }
    document.querySelector("input").value=""
}