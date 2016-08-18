it('it takes note upon instantiation', function () {
  var note = new Note("hello");
  assert.isTrue(note._text !== null);
});


// function hasMethodToReturnText(){
//   var note = new Note("what's up");
//   assert.isTrue(note.getText() == "what's up");
// }
//
// hasMethodToReturnText();
