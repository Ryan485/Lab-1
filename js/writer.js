const STORAGE_KEY = "writer_notes";

const lastSaved = document.getElementById("last-saved");
const notesContainer = document.getElementById("notes-container");
const addBtn = document.getElementById("add-btn");

let notes = [];

function formatTime(time) {
    return new Date(time).toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
}

function setLastSavedTime(time) {
    lastSaved.textContent = "stored at: " + formatTime(time);
}

addBtn.addEventListener("click", () => {
    const noteRow = document.createElement("div");
    noteRow.className = "note-row";

    const textarea = document.createElement("textarea");
    textarea.className = "note-box";

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove"

    removeBtn.addEventListener("click", () => {
        noteRow.remove();
    })

    //put textarea and button inside the row
    noteRow.appendChild(textarea);
    noteRow.appendChild(removeBtn);

    //make them appear
    notesContainer.appendChild(noteRow);
});

