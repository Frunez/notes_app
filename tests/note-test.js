it('it takes note upon instantiation', function noteTakesTextUponInstantiation() {
  var note = new Note("hello");
  assert.isTrue(note._text !== null);
});

noteTakesTextUponInstantiation();

function hasMethodToReturnText(){
  var note = new Note("what's up");
  assert.isTrue(note.getText() == "what's up");
}

hasMethodToReturnText();
