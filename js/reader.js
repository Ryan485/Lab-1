const STORAGE_KEY = "writer_notes";

const notesContainer = document.getElementById("notes-container");
const updatedTime = document.getElementById("updated-time")

function formatTime(time) {
    return new Date(time).toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}

function setUpdatedTime(time) {
    updatedTime.textContent = "retrieved at: " + formatTime(time);
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

