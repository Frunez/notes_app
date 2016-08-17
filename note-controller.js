// document.addEventListener('DOMContentLoaded', function(){
(function(exports) {
  function NoteController(noteview) {
    this._noteview = noteview;
  }

  NoteController.prototype.displayNotesList = function() {
      var element = document.getElementById('app');
      element.innerHTML = this._noteview.returnListAsHTML();
      // console.log(element.innerHTML);
    // });
  };

  exports.NoteController = NoteController;
})(this);

// var notecontroller = new NoteController("Why not work?");
// notecontroller.displayNotesList();
