it('returns a single string of html of a single note', function () {
  var singleNote = new SingleNote();
  var note = new Note('Wow this works!');
  assert.isTrue(singleNote.view(note) == '<div>Wow this works!</div>');
});
