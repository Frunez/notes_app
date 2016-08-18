(function(exports) {
  var idCounter = 0;

  function Note(text){
    this._text = text;
    this.id = idCounter++;
  }

  Note.prototype = {
    getText: function() {
      return this._text;
    },

  };

  exports.Note = Note;
})(this);
