//ChatGPT assisted in the coding on this file.

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

function saveNotes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    setLastSavedTime(Date.now());
}

function loadNotes() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function createNoteRow(note) {
    const noteRow = document.createElement("div");
    noteRow.className = "note-row";

    const textarea = document.createElement("textarea");
    textarea.className = "note-box";
    textarea.value = note.text;

    textarea.addEventListener("input", () => {
        note.text = textarea.value;
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
        notes = notes.filter(n => n.id !== note.id);
        noteRow.remove();
        saveNotes();
    })

    noteRow.appendChild(textarea);
    noteRow.appendChild(removeBtn);

    return noteRow;
}

addBtn.addEventListener("click", () => {
    const note = {
        id: Date.now() + Math.random(),
        text: ""
    };

    notes.push(note);
    notesContainer.appendChild(createNoteRow(note));
s
    saveNotes();
});

notes = loadNotes();

for (const note of notes) {
    notesContainer.appendChild(createNoteRow(note));
}

setInterval(saveNotes, 2000);