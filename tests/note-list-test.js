
var assert = new Assert();

function storesArrayOfNoteModels(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var note = new Note("note" + i);
    noteList.addNoteToNotes(note);
  }
  assert.isTrue(noteList._notes.length == 3);
  // var string = "Stores array of note objects";
  // assert.info(result, string);
}

storesArrayOfNoteModels();

function returnListOfNotes(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var text = ('note' + i);
    noteList.addNoteToNotes(text);
  }
  assert.isTrue(noteList.getNotes()[2].getText() == 'note2');
}

returnListOfNotes();
