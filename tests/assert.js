(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy", true);
    }
    // return true;
  }

  function specList(result, tag, color) {
    var div = document.getElementById('test');
    var element = document.createElement(tag);
    element.appendChild(document.createTextNode(result));
    div.appendChild(element);
    if (color === "blue")
    element.setAttribute('class', 'success');
    else if (color === "red")
    element.setAttribute('class', 'failed');
    else
    element.setAttribute('class', 'black');
  }

  function it(spec, block) {
    try {
     specList(spec, "p");
     block();
     specList("passed test", "p", "blue");
     } catch (error) {
      specList(error, "p", "red");
     }
    }


  exports.assert = {isTrue: isTrue};
  exports.it = it;
})(this);
