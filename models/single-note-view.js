(function(exports){
  function SingleNote() {
  }

  SingleNote.prototype.view = function(note) {
    return "<div>" + note.getText() + "</div>";
  };

  exports.SingleNote = SingleNote;

})(this);
