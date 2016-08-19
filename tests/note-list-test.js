
it('stores an array of note models', function storesArrayOfNoteModels(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var note = new Note("note" + i);
    noteList.addNoteToNotes(note);
  }
  result = assert.isTrue(noteList._notes.length == 3);
  // var string = "it stores array of note objects";
  // test.info(result, string);
});

it('returns list of note objects', function returnListOfNotes(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var text = ('note' + i);
    noteList.addNoteToNotes(text);
  }
  result = assert.isTrue(noteList.getNotes()[2].getText() == 'note2');
  // var string = "it returns list of notes";
  // test.info(result, string);
});

it('returns a list of notes each limited to 20 char', function(){
  var noteList20Char = new NoteList();
  noteList20Char.addNoteToNotes('it returns list of notes');
  var noteView20Char = new NoteView(noteList20Char);
  assert.isTrue(noteView20Char.returnListAsHTML().length === 64);
});
