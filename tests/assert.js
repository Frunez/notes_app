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
    if (color === "green")
    element.setAttribute('class', 'success');
    else if (color === "red")
    element.setAttribute('class', 'failed');
    else
    element.setAttribute('class', 'black');
  }

  function it(spec, block) {
    try {
     specList(spec, "h5");
     block();
     specList("Passed test", "p", "green");
     } catch (error) {
      specList(error, "p", "red");
     }
    }


  exports.assert = {isTrue: isTrue};
  exports.it = it;
})(this);
