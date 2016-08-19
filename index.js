
var noteList = new NoteList();
noteList.addNoteToNotes('Hi its johnnys birthday');
noteList.addNoteToNotes('Very Nice party to go to later');
noteList.addNoteToNotes('Please Work all day and night for the rest of makers course');
var noteView = new NoteView(noteList);
var noteController = new NoteController(noteView);
noteController.displayNotesList();
