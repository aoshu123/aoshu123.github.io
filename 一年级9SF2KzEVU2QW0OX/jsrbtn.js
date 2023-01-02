document.oncontextmenu = function() { return false; }
document.onselectstart = function() { return false; }
document.onkeydown = document.onkeyup = function(event) {
    let e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
      e.returnValue = false;
      return false;
    }
  };
  let userAgent = navigator.userAgent;
  if (userAgent.indexOf("Firefox") > -1) {
    let checkStatus;
    let devtools = /./;
    devtools.toString = function() {
      checkStatus = "on";
    };
    setInterval(function() {
      checkStatus = "off";
      console.log(devtools);
      console.log(checkStatus);
      console.clear();
      if (checkStatus === "on") {
        let target = "";
        try {
          window.open("about:blank", (target = "_self"));
        } catch (err) {
          let a = document.createElement("button");
          a.onclick = function() {
            window.open("about:blank", (target = "_self"));
          };
          a.click();
        }
      }
    }, 200);
  } else {
    setInterval(function() {
        var threshold = 200;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if(widthThreshold || heightThreshold){
            let target = "";
            try {
            window.open("about:blank", (target = "_self"));
            } catch (err) {
            let a = document.createElement("button");
            a.onclick = function() {
                window.open("about:blank", (target = "_self"));
            };
            a.click();
            }
        }
    },200);
  }
  window.onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
    if (e.ctrlKey && e.keyCode == 80) {
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
        e.returnValue = false;
        return (false);
    }
};