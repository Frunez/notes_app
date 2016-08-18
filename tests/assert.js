(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy", true);
    }
    // return true;
  }

  function it(spec, block) {
    try {
     createListElement(spec, "h5");
     block();
     createListElement("Passed test", "p", "green");
     } catch (error) {
      createListElement(error, "p", "red");
     }
    }

  function specList(result, color, tag) {
    var div = document.getElementById('test');
    var element = document.createElement(tag);
    div.appendChild(element);
    if (color === "green")
      element.setAttribute('class', 'success');
    else if (color === "red")
      element.setAttribute('class', 'failed');
    else
      element.setAttribute('class', 'black');
  }

  exports.assert = {isTrue: isTrue};
  exports.it = it;
})(this);
