(function(exports) {
  var noteList, noteView, htmlString;

    beforeEach = function() {
    noteList = new NoteList();
    noteView = new NoteView(noteList);

    for (i = 0; i < 3; i++) {
      noteList.addNoteToNotes("example");
    }
    htmlString = "<ul><li><div><a href=#0>example</a></div></li><li><div><a href=#1>example</a></div></li><li><div><a href=#2>example</a></div></li></ul>";

  };

  it('can display a link that is assoctiated to each note', function () {
    var noteListNew = new NoteList();
    noteListNew.addNoteToNotes("yep");
    noteListNew.addNoteToNotes("nope");
    console.log(noteListNew.getNotes()[1].id);
    assert.isTrue(noteListNew.getNotes()[1].id === 16);
  });

  it('takesNoteListUponInstantiation', function takesNoteListUponInstantiation() {
    beforeEach();
    assert.isTrue(noteView !== null && noteView !== undefined);
  });

  it('returns note list as HTML', function returnsNoteListAsHTML() {
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
    assert.isTrue(noteView.returnListAsHTML() == "<ul><li><div><a href=#0>hello</a></div></li></ul>");
  });


})(this);
