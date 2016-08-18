(function(exports) {
  function info(result, string) {
    if (result == "Nice!") {
      return "<div style='color:green'>" + string + ": Passed!</div><br>";
    }
    return "<div style='color:red'>" + string + ": failed :( (check console log for more info)</div><br>";
  }

  exports.test = {info: info};
})(this);
