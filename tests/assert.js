(function(exports) {
  function Assert(){
  }

  Assert.prototype = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      return console.log("Nice!");
    }
  };

  // Assert.prototype = {
  //   info: function(result, string) {
  //     if (result == "Nice!") {
  //       return "<style color = 'green'></style>" + string + ": Passed!<br>";
  //     }
  //     return "<style color = 'red'></style>" + string + ": failed :( (check console log for more info)<br>";
  //   }
  // };

  exports.Assert = Assert;

})(this);
