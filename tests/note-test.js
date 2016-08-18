
var assert = new Assert();


function noteTakesTextUponInstantiation() {
  var note = new Note("hello");
  if (assert.isTrue(note._text !== null) == "Nice!") {
    return "Note takes text upon instantiation";
  }
}

noteTakesTextUponInstantiation();

function hasMethodToReturnText(){
  var note = new Note("what's up");
  assert.isTrue(note.getText() == "what's up");
}

hasMethodToReturnText();
