(function(exports) {
  var noteList, noteView, htmlString;

    beforeEach = function() {
    noteList = new NoteList();
    noteView = new NoteView(noteList);

    for (i = 0; i < 3; i++) {
      noteList.addNoteToNotes("example");
    }
    htmlString = "<ul><li><div>example</div></li><li><div>example</div></li><li><div>example</div></li></ul>";

  };


  it('takesNoteListUponInstantiation', function takesNoteListUponInstantiation() {
    beforeEach();
    assert.isTrue(noteView !== null && noteView !== undefined);
  });

  it('returnsNoteListAsHTML', function returnsNoteListAsHTML() {
    beforeEach();
    assert.isTrue(noteView.returnListAsHTML() == htmlString);
  });

  it('canTakeListWithoutNotes', function canTakeListWithoutNotes() {
    var noteView = new NoteView(new NoteList());
    assert.isTrue(noteView.returnListAsHTML() == "<ul></ul>");
  });

  it('canTakeListWithOneNote', function canTakeListWithOneNote() {
    var noteList = new NoteList();
    noteList.addNoteToNotes("hello");
    var noteView = new NoteView(noteList);
    assert.isTrue(noteView.returnListAsHTML() == "<ul><li><div>hello</div></li></ul>");
  });

})(this);
