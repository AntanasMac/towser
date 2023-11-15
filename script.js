const NOTES_CONTAINER = document.querySelector(".notes-container");
const CREATE_BTN = document.querySelector(".btn_add_note");
let notes = document.querySelectorAll(".input-box");


// making so that after closing/opening the browser it checks local storage for data

function showNotes(){
    NOTES_CONTAINER.innerHTML = localStorage.getItem("notes");
};
showNotes();


// making so that the notes are stored in the browser
// so when the user comes back to the page, he sees his notes

function updateStorage() {
    localStorage.setItem("notes", NOTES_CONTAINER.innerHTML);
}

//creating new note functionality

CREATE_BTN.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/deleteMINI.jpg";
    NOTES_CONTAINER.appendChild(inputBox).appendChild(img);
})

// deleting a existing note functionality

NOTES_CONTAINER.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

