<!--#include file="callbackxhr.js" -->
<!--#include file="changeStyle.js" -->
<!--#include file="invisible.js" -->

function setCookie(cname, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  var cvalue = getCookie(cname);
  if (cvalue == "" || cvalue == null) {
    cvalue = 0;
  }
  console.log(cvalue);
  if (cvalue == 1) {
    cvalue = 0;
  } else if (cvalue == 0) {
    cvalue = 1;
  }
  console.log(cvalue);
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var aC = getCookie("acceptCookies");
  if (aC == 1) {
    invisible();
  }
  var Li = getCookie("Light");
  if (Li == 1) {
    updateBannerTop();
  }
  var mv = getCookie("malvoyant");
  if (mv == 1) {
    changementdestyle();
  }
}
