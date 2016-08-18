it('returns a single string of html of a single note', function () {
  var singleNote = new SingleNote();
  var note = new Note('Wow this works!');
  var noteynote = new Note('Yeyeyeye');
  assert.isTrue(singleNote.view(noteynote) == '<div>Yeyeyeye</div>');
});
