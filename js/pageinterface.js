
var sbanners = nwtMotion(banners(true), 1);
var sweepBanners = fullSweep(sbanners, .09, .0045);
var partSweepBanners = partSweep(sbanners, .03, .0025);

var titletext = ufmMotion(opacity(document.getElementById("headeropen")), 1);

function toggleDisplay(dir, next){
  var time = partSweepBanners((dir ? .5 : 1), next);
  fullFade(titletext, time)(!dir);
}

var sweepPage = fullSweep(nwtMotion(fullPage("content", false), 0), .05, .003);

var sweepMenu = fullSweep(nwtMotion(menuBar(false), 0), .12, .008);
var toggleMenu = toggle(sweepMenu, true);

var vertstate = true;

function openPage(){
  sequence([partial(sweepMenu, false), partial(sweepBanners, false), partial(sweepPage, true)]);
}

function closePage(){
  sequence([partial(sweepPage, false), partial(sweepBanners, true)]);
}

function openTranquility(){
  loadDisplay("../uncontext1.html");
  sweepDisp = displayHandle(ufmMotion(display(false), 0), 600);
  
  sweepMenu(false);
  sequence([partial(toggleDisplay, true), sweepDisp]); 
}
