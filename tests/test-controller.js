
(function(exports) {
  function TestController(noteview) {
    this._tests = noteview;
  }

  NoteController.prototype.testResults = function() {
      var element = document.getElementById('test');
      element.innerHTML = this._tests.returnListAsHTML();

  };

  exports.TestController = TestController;
})(this);
