(function(exports){
  it('it takes note upon instantiation', function () {
    var note1 = new Note("hello");
    assert.isTrue(note1._text !== null);
  });

  it('it returns txt of saved note object', function () {
    var note2 = new Note("what's up");
    assert.isTrue(note2.getText() == "what's up");
  });

  it('creates note with an incrementing id', function() {
    var note3 = new Note('ye');
    var note4 = new Note('yep');
    var note5 = new Note('yeop');
    assert.isTrue(note5.id == 4);
  });
})(this);
