let saveCheckbox = document.getElementById("feature-flag");
let notes = document.getElementById("textarea");

function updateNotes(){
    setInterval(()=>{
        let note= notes.value;
        if(saveCheckbox.checked)window.localStorage.setItem("autosave-data", note);
    },1000);
}
function prevNotes(){
    if (window.localStorage.getItem("autosave-data")) {
    notes.value = window.localStorage.getItem("autosave-data");
  }
    updateNotes();
}
prevNotes();