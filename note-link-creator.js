makeUrlChangeShowNoteIdForCurrentPage();

function makeUrlChangeShowNoteIdForCurrentPage() {
  window.addEventListener("hashchange", showNoteIdForCurrentPage);
}

function showNoteIdForCurrentPage() {
  showNote(getNoteIdFromUrl(window.location));
}

function getNoteIdFromUrl(location) {
  return location.hash.split('#')[1];
}

function showNote(note) {
  document
    .getElementById("note-reader")
    .innerHTML = this.noteList.getNotes()[note].getText();
}
