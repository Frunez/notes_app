
var noteList = new NoteList();
var noteView = new NoteView(noteList);

var htmlString = "<ul><li><div>example</div></li><li><div>example</div></li><li><div>example</div></li></ul>";

for (i=0; i<3; i++){
  noteList.addNoteToNotes("example");
}

it('takesNoteListUponInstantiation', function takesNoteListUponInstantiation() {
  assert.isTrue(noteView !== null);
});

it('returnsNoteListAsHTML', function returnsNoteListAsHTML() {
  assert.isTrue(noteView.returnListAsHTML() == htmlString);
});

it('canTakeListWithoutNotes', function canTakeListWithoutNotes() {
  var noteView = new NoteView(new NoteList());
  assert.isTrue(noteView.returnListAsHTML() == "<ul></ul>" );
});

  it('canTakeListWithOneNote', function canTakeListWithOneNote(){
    var noteList = new NoteList();
    noteList.addNoteToNotes("hello");
    var noteView = new NoteView(noteList);
    assert.isTrue(noteView.returnListAsHTML() == "<ul><li><div>hello</div></li></ul>");
  });
