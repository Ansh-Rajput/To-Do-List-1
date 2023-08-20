const inputBox = document.getElementById("input");
const ul = document.getElementById("ul");
const addButton = document.getElementById("btn");
const deleteButton = document.getElementById("delete");

const addNote = () => {

    if (inputBox.value === '') {
        alert("Plese write something before adding Note.")
    }
    else {
        const li = document.createElement("li");
        li.innerText = inputBox.value;

        const span = document.createElement("span");
        span.innerHTML = "&#10007";
        span.classList.add("delete");

        li.appendChild(span);
        ul.appendChild(li);
    }

    inputBox.value = '';
    saveData();
}

ul.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
addButton.addEventListener("click", () => {
    addNote();
})

const saveData = () => {
    localStorage.setItem("data",ul.innerHTML);
}

const showData = () => {
    ul.innerHTML = localStorage.getItem("data");
}

showData();