var arcs = [];

stopBackSpinner = spinner(false, .05);

function setup(){

  function getDim(){
    var width = window.innerWidth * window.devicePixelRatio;
    var height = window.innerHeight * window.devicePixelRatio;
    return Math.max(width, height);
  }

//  var height = window.screen.availHeight;
//  var width = window.screen.availWidth;
//  var width = window.innerWidth;
//  var height = window.innerHeight;
  var dim = getDim();
  cvs = createCanvas(dim, dim);
  cvs.parent("sketchpad");
  arcs = [];

  var center = [dim / 2, dim / 2];

  base = 255;
  background(base, base, base + 10);

  var num = 250;
  var pow = 5;
  var standard = Math.pow(30, 1 /pow);
  var maxRad = Math.sqrt(Math.pow( window.innerWidth ,2) + Math.pow(window.innerHeight,2));
  blendMode(BLEND);
  for(var i = 0; i < num; i++){
    var dist = (.3 + (num - i) / (num * 1.5)) * standard;
    dist = Math.pow(dist, pow);
    var rad = maxRad / (1.5 + dist);
    var radWidth = Math.sqrt(2 * dim * dim) * .12 / (1 + dist);
    //radWidth *= radWidth * dist / (rad + (radWidth / 2) + dist);
    var rand = Math.random();
    var shade = Math.random() * 224 + 32;
    var colors = [shade, shade, shade, 160];
    arcs.push(new Arc(center, Math.PI / 4 + Math.random() - .5, Math.random() * 2 * PI, radWidth, rad, .002 + (Math.random() - .5) / 25, colors));
    arcs[i].draw();
  }

  noLoop();

  function fadeIn(){
    mover(opacity(document.getElementById("sketchpad")), 0)(1, uniformMotion(), .015);
  }

  stopBackSpinner(.05, fadeIn);

  var canvasElement = document.getElementById('defaultCanvas');

  function onResize(){
    var ndim = getDim();
    if(dim !== ndim){
      dim = ndim;
      canvasElement.style.width = dim + 'px';
      canvasElement.style.height = dim + 'px';
    }
  }

  window.addEventListener('resize', onResize);

/*
  function stop(){
    stopBackSpinner(.05, fadeIn);
  }
 
  setTimeout(stop, 3000);
*/
/*  var pcanvas = document.getElementById("defaultCanvas");
  var imgdata = pcanvas.getContext("2d").getImageData(0, 0, pcanvas.width, pcanvas.height);
  document.getElementById("backcanvas").getContext("2d").putImageData(imgdata, 0, 0);
  noCanvas();*/
  //document.getElementById("sketchpad").removeChild(document.getElementById("defaultCanvas"));
  
}

