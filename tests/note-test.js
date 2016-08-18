it('it takes note upon instantiation', function () {
  var note = new Note("hello");
  assert.isTrue(note._text !== null);
});


it('it returns txt of saved note object', function () {
  var note = new Note("what's up");
  assert.isTrue(note.getText() == "what's up");
});
