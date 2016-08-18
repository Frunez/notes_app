
function storesArrayOfNoteModels(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var note = new Note("note" + i);
    noteList.addNoteToNotes(note);
  }
  result = assert.isTrue(noteList._notes.length == 3);
  var string = "it stores array of note objects";
  // test.info(result, string);
}

storesArrayOfNoteModels();

function returnListOfNotes(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var text = ('note' + i);
    noteList.addNoteToNotes(text);
  }
  result = assert.isTrue(noteList.getNotes()[2].getText() == 'note2');
  var string = "it returns list of notes";
  // test.info(result, string);
}

returnListOfNotes();
