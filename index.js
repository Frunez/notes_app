
var notelist = new NoteList();
notelist.addNoteToNotes('Hi');
notelist.addNoteToNotes('Very Nice');
notelist.addNoteToNotes('Please Work');
var noteview = new NoteView(notelist);
var notecontroller = new NoteController(noteview);
notecontroller.displayNotesList();
