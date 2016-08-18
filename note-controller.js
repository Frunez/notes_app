
(function(exports) {
  function NoteController(noteview) {
    this._noteview = noteview;
  }

  NoteController.prototype.displayNotesList = function() {
      var element = document.getElementById('app');
      element.innerHTML = this._noteview.returnListAsHTML();

  };

  exports.NoteController = NoteController;
})(this);
