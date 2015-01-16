
function banners(display){
  var headpos = shift(document.getElementById("header"), true, true);
  var tailpos = shift(document.getElementById("footer"), false, true);

  var ret = function(x) { headpos(x); tailpos(x); };
  ret(display ? 1 : 0);
  return ret;
}

function DisplayCanvas(display){

  this.toggle = function(dir, next){
    if(dir){
      var spot = document.getElementById("sketchspot"); 
      spot.style.display = "inline";
      var iframe = document.createElement("iframe");
      var isrc = document.createAttribute("src");
      isrc.value = "../uncontext1.html";
      var frameid = document.createAttribute("id");
      frameid.value = "displayframe";
      iframe.setAttributeNode(isrc);
      iframe.setAttributeNode(frameid);
      spot.appendChild(iframe);
    } else {
      document.getElementById("sketchspot").removeChild(document.getElementById("displayframe"));
    }
  }
}

function fullPage(page, display){

  var page  = document.getElementById(page);
  var border  = document.getElementById("borderbox");
  
  var c = clip(page, true, page.offsetWidth, page.offsetHeight);
  var s = scaleBorder(border, true);
  var f = sidefade(page);

  var ret = function(x) { c(x); s(x); f(x); };
  ret(display ? 1 : 0);
  return ret;

}

function menuBar(display){
  var bar = document.getElementById("menubar");
  var border = document.getElementById("menuborder");
  var c = clip(bar, false, bar.offsetWidth, bar.offsetHeight);
  var s = scaleBorder(border, false);

  var ret = function(x) { s(x); c(x); };
  ret(display ? 1 : 0);
  return ret;
}
