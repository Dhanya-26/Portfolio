function mycolor1() {
    document.getElementById("botton").style.backgroundColor = " #7510F7";
    document.getElementById("botton").style.color = "white";

}

function mycolor2() {
    document.getElementById("botton").style.backgroundColor = "white";
    document.getElementById("botton").style.color = "#7510F7";

}

// var x = document.getElementById("footed").querySelectorAll("i");
// var z;
// for (z = 0; z < x.length; z++) {
//     x[z].onmouseenter = function () {
//         x.style.backgroundColor = "white";
//         x.style.color = "#7510F7";
//     }

//     x[z].onmouseleave = function () {
//         x.style.backgroundColor = "#7510F7";
//         x.style.color = "white";

//     }
// }

var p = document.getElementById("foot1")
p.onmouseover = function(){
  p.style.backgroundColor = "white";
  p.style.color = "#7510F7"
}

p.onmouseout = function(){
  p.style.backgroundColor = "#7510F7";
  p.style.color = "white"
}

// --------------------
var q = document.getElementById("foot2")
q.onmouseover = function(){
  q.style.backgroundColor = "white";
  q.style.color = "#7510F7"
}

q.onmouseout = function(){
  q.style.backgroundColor = "#7510F7";
  q.style.color = "white"
}

// -------------------
var r = document.getElementById("foot3")
r.onmouseover = function(){
  r.style.backgroundColor = "white";
  r.style.color = "#7510F7"
}

r.onmouseout = function(){
  r.style.backgroundColor = "#7510F7";
  r.style.color = "white"
}

// ---------------
var s = document.getElementById("foot4")
s.onmouseover = function(){
  s.style.backgroundColor = "white";
  s.style.color = "#7510F7"
}

s.onmouseout = function(){
  s.style.backgroundColor = "#7510F7";
  s.style.color = "white"
}

// -----------
var t = document.getElementById("foot5")
t.onmouseover = function(){
  t.style.backgroundColor = "white";
  t.style.color = "#7510F7"
}

t.onmouseout = function(){
t.style.backgroundColor = "#7510F7";
  t.style.color = "white"
}




// CHAAR DABBE

var a = document.querySelector(".work1");
a.onmouseover = function(){
    a.setAttribute("style","opacity:0.9");
  document.getElementById("view1").style.visibility = "visible"
  document.getElementById("view1").setAttribute("style","opacity:1");
//    a.innerHTML = "View Website";
//    a.innerHTML = "<span style='font-size:40px'>View Website</span>";
}
document.getElementById("view1").style.visibility = "hidden"
a.onmouseout = function(){
    a.setAttribute("style","opacity:1");
    document.getElementById("view1").style.visibility = "hidden"
 }

//  var b = document.getElementsByClassName("work1").querySelector(" h2, p");
//  b.mouseover = function(){
//       b.setAttribute("style","opacity:0.2");
//  }


var b = document.querySelector(".work2");
b.onmouseover = function(){
    b.setAttribute("style","opacity:0.9");
  document.getElementById("view2").style.visibility = "visible"
  document.getElementById("view2").setAttribute("style","opacity:1");
//    a.innerHTML = "View Website";
//    a.innerHTML = "<span style='font-size:40px'>View Website</span>";
}

b.onmouseout = function(){
    b.setAttribute("style","opacity:1");
    document.getElementById("view2").style.visibility = "hidden"
 }

 
var c = document.querySelector(".work3");
c.onmouseover = function(){
    c.setAttribute("style","opacity:0.9");
  document.getElementById("view3").style.visibility = "visible"
  document.getElementById("view3").setAttribute("style","opacity:1");
//    a.innerHTML = "View Website";
//    a.innerHTML = "<span style='font-size:40px'>View Website</span>";
}

c.onmouseout = function(){
    c.setAttribute("style","opacity:1");
    document.getElementById("view3").style.visibility = "hidden"
 }

 
var d = document.querySelector(".work4");
d.onmouseover = function(){
    d.setAttribute("style","opacity:0.9");
  document.getElementById("view4").style.visibility = "visible"
  document.getElementById("view4").setAttribute("style","opacity:1");
//    a.innerHTML = "View Website";
//    a.innerHTML = "<span style='font-size:40px'>View Website</span>";
}

d.onmouseout = function(){
    d.setAttribute("style","opacity:1");
    document.getElementById("view4").style.visibility = "hidden"
 }

 document.getElementById("view2").style.visibility = "hidden"
 document.getElementById("view3").style.visibility = "hidden"
 document.getElementById("view4").style.visibility = "hidden"


//  IF ELSE JS
document.onload =setInterval(colorchg,2000);
function colorchg()
{
   var m = document.getElementById('redirect');
  if(m.style.color == "black")
  m.style.color = "palevioletred";
  else if(m.style.color == "palevioletred")
  m.style.color = "steelblue"
  else if(m.style.color == "steelblue")
  m.style.color = "orange"
  else if(m.style.color == "orange")
  m.style.color = "blueviolet"
  else if(m.style.color == "blueviolet")
  m.style.color = "red"
  else if(m.style.color == "red")
  m.style.color = "blue"
  else
  m.style.color = "black"
}
 
  
