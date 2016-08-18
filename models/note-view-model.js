
(function(exports) {
  function NoteView(noteList) {
    this._noteList = noteList;
  }
  NoteView.prototype = {
    returnListAsHTML: function() {
      var htmlString ="<ul>";
      for(i=0;i<this._noteList.getNotes().length;i++) {
        htmlString += "<li><div>" + this._noteList.getNotes()[i].getText().substring(0,20) + "</div></li>";
      }
      return htmlString += "</ul>";
    }
  };
    exports.NoteView = NoteView;
})(this);
