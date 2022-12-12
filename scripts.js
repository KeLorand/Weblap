var bossSec = document.getElementsByClassName('bossimgs');
var bossSecState = false;

var classSec = document.getElementsByClassName('classimgs');
var classSecState = false;

var dungSec = document.getElementsByClassName('dungeonsimg');
var dungSecState = false;

var itemsSec = document.getElementsByClassName('itemsimg');
var itemsSecState = false;

var eventsSec = document.getElementsByClassName('eventsimg');
var eventsSecState = false;

var ratingSec = document.getElementById('rating');
var ratingSecState = false;


var navBar = document.getElementById('navbarown');
var menuClose = document.getElementById('menuClose');
var menuOpen = document.getElementById('menuOpen');
var navShown = false;
var dungeondivs = document.getElementsByClassName('dungeondivs');
var dungeonid1 = document.getElementById('dungeonid1');
var dungeonid2 = document.getElementById('dungeonid2');
var dungeonid3 = document.getElementById('dungeonid3');
var dungeonid4 = document.getElementById('dungeonid4');
var dungeonid5 = document.getElementById('dungeonid5');
var dungeonid6 = document.getElementById('dungeonid6');
var dungeonid7 = document.getElementById('dungeonid7');
var dungeonid8 = document.getElementById('dungeonid8');
var dungeonid9 = document.getElementById('dungeonid9');
var dungeonid10 = document.getElementById('dungeonid10');
var dungeonid11 = document.getElementById('dungeonid11');
var dungeonid12 = document.getElementById('dungeonid12');
var dungeonid13 = document.getElementById('dungeonid13');
var dungeonid14 = document.getElementById('dungeonid14');
var itemdivs = document.getElementsByClassName('itemdivs');
var itemid1 = document.getElementById('itemid1');
var itemid2 = document.getElementById('itemid2');
var itemid3 = document.getElementById('itemid3');
var body = document.getElementById('body');
var classdivs = document.getElementsByClassName('classdivs');
var classimg1 = document.getElementById('classimg1');
var classimg2 = document.getElementById('classimg2');
var classimg3 = document.getElementById('classimg3');
var classimg4 = document.getElementById('classimg4');
var classimg5 = document.getElementById('classimg5');
var classimg6 = document.getElementById('classimg6');
var divs = document.getElementsByClassName('divs');
var divsecState = false;
var classdivsecState = false;
var dungeondivsecState = false;
var itemdivsecState = false;
var firstopen1 = document.getElementById('firstopen1');
var firstopen2 = document.getElementById('firstopen2');
var firstopen3 = document.getElementById('firstopen3');
var firstopen4 = document.getElementById('firstopen4');
var firstopen5 = document.getElementById('firstopen5');
var firstopen6 = document.getElementById('firstopen6');
var firstopen7 = document.getElementById('firstopen7');
var firstopen8 = document.getElementById('firstopen8');
var firstopen9 = document.getElementById('firstopen9');
var firstopen10 = document.getElementById('firstopen10');
var firstopen11 = document.getElementById('firstopen11');
var firstopen12 = document.getElementById('firstopen12');
var firstopen13 = document.getElementById('firstopen13');
var firstopen14 = document.getElementById('firstopen14');
var firstopen15 = document.getElementById('firstopen15');
var firstopen16 = document.getElementById('firstopen16');
var firstopen17 = document.getElementById('firstopen17');
var firstopen18 = document.getElementById('firstopen18');
var firstopen19 = document.getElementById('firstopen19');
var firstopen20 = document.getElementById('firstopen20');
var firstopen21 = document.getElementById('firstopen21');
var firstopen22 = document.getElementById('firstopen22');
var firstopen23 = document.getElementById('firstopen23');
var firstopen24 = document.getElementById('firstopen24');
var firstopen25 = document.getElementById('firstopen25');
var firstopen26 = document.getElementById('firstopen26');
var firstopen27 = document.getElementById('firstopen27');
var firstopen28 = document.getElementById('firstopen28');
var firstopen29 = document.getElementById('firstopen29');
var firstopen30 = document.getElementById('firstopen30');
var firstopen31 = document.getElementById('firstopen31');
var firstopen32 = document.getElementById('firstopen32');
var firstopen33 = document.getElementById('firstopen33');
var firstopen34 = document.getElementById('firstopen34');
var firstopen35 = document.getElementById('firstopen35');
var firstopen36 = document.getElementById('firstopen36');
var firstopen37 = document.getElementById('firstopen37');
var firstopen38 = document.getElementById('firstopen38');
var firstopen39 = document.getElementById('firstopen39');
var firstopen40 = document.getElementById('firstopen40');



function closeBoss(){
  firstopen1.style.setProperty("display", "none", "important");
  firstopen2.style.setProperty("display", "none", "important");
  firstopen3.style.setProperty("display", "none", "important");
  firstopen4.style.setProperty("display", "none", "important");
  firstopen5.style.setProperty("display", "none", "important");
  firstopen6.style.setProperty("display", "none", "important");
  firstopen7.style.setProperty("display", "none", "important");
  firstopen8.style.setProperty("display", "none", "important");
  firstopen9.style.setProperty("display", "none", "important");
  firstopen10.style.setProperty("display", "none", "important");
  firstopen11.style.setProperty("display", "none", "important");
  firstopen12.style.setProperty("display", "none", "important");
  firstopen13.style.setProperty("display", "none", "important");
  firstopen14.style.setProperty("display", "none", "important");
  firstopen15.style.setProperty("display", "none", "important");
  firstopen16.style.setProperty("display", "none", "important");
  firstopen17.style.setProperty("display", "none", "important");
  firstopen18.style.setProperty("display", "none", "important");
  firstopen19.style.setProperty("display", "none", "important");
  firstopen20.style.setProperty("display", "none", "important");
  firstopen21.style.setProperty("display", "none", "important");
  firstopen22.style.setProperty("display", "none", "important");
  firstopen23.style.setProperty("display", "none", "important");
  firstopen24.style.setProperty("display", "none", "important");
  firstopen25.style.setProperty("display", "none", "important");
  firstopen26.style.setProperty("display", "none", "important");
  firstopen27.style.setProperty("display", "none", "important");
  firstopen28.style.setProperty("display", "none", "important");
  firstopen29.style.setProperty("display", "none", "important");

}
function closeOther(){
  classimg1.style.setProperty("display", "none", "important");
  classimg2.style.setProperty("display", "none", "important");
  classimg3.style.setProperty("display", "none", "important");
  classimg4.style.setProperty("display", "none", "important");
  classimg5.style.setProperty("display", "none", "important");
  classimg6.style.setProperty("display", "none", "important");
  itemid1.style.setProperty("display", "none", "important");
  itemid2.style.setProperty("display", "none", "important");
  itemid3.style.setProperty("display", "none", "important");
  dungeonid1.style.setProperty("display", "none", "important");
  dungeonid2.style.setProperty("display", "none", "important");
  dungeonid3.style.setProperty("display", "none", "important");
  dungeonid4.style.setProperty("display", "none", "important");
  dungeonid5.style.setProperty("display", "none", "important");
  dungeonid6.style.setProperty("display", "none", "important");
  dungeonid7.style.setProperty("display", "none", "important");
  dungeonid8.style.setProperty("display", "none", "important");
  dungeonid9.style.setProperty("display", "none", "important");
  dungeonid10.style.setProperty("display", "none", "important");
  dungeonid11.style.setProperty("display", "none", "important");
  dungeonid12.style.setProperty("display", "none", "important");
  dungeonid13.style.setProperty("display", "none", "important");
  dungeonid14.style.setProperty("display", "none", "important");
  firstopen30.style.setProperty("display", "none", "important");
  firstopen31.style.setProperty("display", "none", "important");
  firstopen32.style.setProperty("display", "none", "important");
  firstopen33.style.setProperty("display", "none", "important");
  firstopen34.style.setProperty("display", "none", "important");
  firstopen35.style.setProperty("display", "none", "important");
  firstopen36.style.setProperty("display", "none", "important");
  firstopen37.style.setProperty("display", "none", "important");
  firstopen38.style.setProperty("display", "none", "important");
  firstopen39.style.setProperty("display", "none", "important");
  firstopen40.style.setProperty("display", "none", "important");
}

function dungeonopen1func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid1.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}

function dungeonopen2func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid2.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}

function dungeonopen3func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid3.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}}
function dungeonopen4func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid4.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}}
function dungeonopen5func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid5.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}}
function dungeonopen6func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid6.style.setProperty("display", "block", "important");
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen7func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid7.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen8func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid8.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen9func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid9.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen10func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid10.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen11func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid11.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen12func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid12.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen13func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid13.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}
function dungeonopen14func() {
  if (dungeondivsecState == false) {
  for (var x = 0; x < dungeondivs.length; x++) {
    dungeondivs[x].style.display = "none";
    dungeonid14.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}

function itemopen1func() {
  if (itemdivsecState == false) {
  for (var x = 0; x < itemdivs.length; x++) {
    itemdivs[x].style.display = "none";
    itemid1.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}
}


function itemopen2func() {
  if (itemdivsecState == false) {
  for (var x = 0; x < itemdivs.length; x++) {
    itemdivs[x].style.display = "none";
    itemid2.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
}
function itemopen3func() {
  if (itemdivsecState == false) {
  for (var x = 0; x < itemdivs.length; x++) {
    itemdivs[x].style.display = "none";
    itemid3.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}}





function classopen1func() {
  if (classdivsecState == false) {
  for (var x = 0; x < classdivs.length; x++) {
    classdivs[x].style.display = "none";
    classimg1.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
  }
}
function classopen2func() {
  for (var x = 0; x < classdivs.length; x++) {
    classdivs[x].style.display = "none";
    classimg2.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  
  }
}
function classopen3func() {
  for (var x = 0; x < classdivs.length; x++) {
    classdivs[x].style.display = "none";
    classimg3.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function classopen4func() {
  for (var x = 0; x < classdivs.length; x++) {
    classdivs[x].style.display = "none";
    classimg4.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function classopen5func() {
  if (classdivsecState == false) {
  for (var x = 0; x < classdivs.length; x++) {
    classdivs[x].style.display = "none";
    classimg5.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
}
function classopen6func() {
  if (classdivsecState == false) {
  for (var x = 0; x < classdivs.length; x++) {
    classdivs[x].style.display = "none";
    classimg6.style.setProperty("display", "block", "important");


    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }}

}

function firstopen1func() {
  if (divsecState == false) {
  for (var x = 0; x < divs.length; x++) {
    divs[x].style.display = "none";
    firstopen1.style.setProperty("display", "block", "important");
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
}
function firstopen2func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen2.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen3func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen3.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen4func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen4.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen5func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen5.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen6func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen6.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen7func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen7.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen8func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen8.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen9func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen9.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen10func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen10.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen11func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen11.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
} function firstopen12func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen12.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen13func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen13.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen14func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen14.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen15func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen15.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen16func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen16.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen17func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen17.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen18func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen18.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen19func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen19.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen20func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen20.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
} function firstopen21func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen21.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen22func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen22.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen23func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen23.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen24func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen24.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
} function firstopen25func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen25.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen26func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen26.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen27func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen27.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
} function firstopen28func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen28.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen29func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen29.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen30func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen30.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen31func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen31.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen32func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen32.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen33func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen33.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen34func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen34.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen35func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen35.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen36func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen36.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen37func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen37.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen38func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen38.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen39func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen39.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}
function firstopen40func() {
  if (divsecState == false) {
    for (var x = 0; x < divs.length; x++) {
      divs[x].style.display = "none";
      firstopen40.style.setProperty("display", "block", "important");
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
}




function BossTab() {
  if (bossSecState == false) {
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "block";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = true;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
  else {
    for (var b = 0; b < bossSec.length; b++) {
      bossSec[b].style.display = "none";
    }
    bossSecState = false;
  }

}

function ClassTab() {
  if (classSecState == false) {
    for (var a = 0; a < classSec.length; a++) {
      classSec[a].style.display = "block";
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";

    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = true;
    eventsSecState = false;
    ratingSecState = false;
  }
  else {
    for (var b = 0; b < classSec.length; b++) {
      classSec[b].style.display = "none";
    }
    classSecState = false;
  }

}

function DungeonsTab() {
  if (dungSecState == false) {
    for (var a = 0; a < dungSec.length; a++) {
      dungSec[a].style.display = "block";
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";
    bossSecState = false;
    itemsSecState = false;
    dungSecState = true;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
  else {
    for (var b = 0; b < dungSec.length; b++) {
      dungSec[b].style.display = "none";
    }
    dungSecState = false;
  }

}

function ItemsTab() {
  if (itemsSecState == false) {
    for (var a = 0; a < itemsSec.length; a++) {
      itemsSec[a].style.display = "block";
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "none";
    bossSecState = false;
    itemsSecState = true;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = false;
  }
  else {
    for (var b = 0; b < itemsSec.length; b++) {
      itemsSec[b].style.display = "none";
    }
    itemsSecState = false;
  }

}

function EventsTab() {
  if (eventsSecState == false) {
    for (var a = 0; a < eventsSec.length; a++) {
      eventsSec[a].style.display = "block";
    }
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    ratingSec.style.display = "none";
    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = true;
    ratingSecState = false;
  }
  else {
    for (var b = 0; b < eventsSec.length; b++) {
      eventsSec[b].style.display = "none";
    }
    eventsSecState = false;
  }

}

function RatesTab() {
  if (ratingSecState == false) {
    for (var a = 0; a < bossSec.length; a++) {
      bossSec[a].style.display = "none";
    }
    for (var c = 0; c < itemsSec.length; c++) {
      itemsSec[c].style.display = "none";
    }
    for (var d = 0; d < dungSec.length; d++) {
      dungSec[d].style.display = "none";
    }
    for (var e = 0; e < classSec.length; e++) {
      classSec[e].style.display = "none";
    }
    for (var f = 0; f < eventsSec.length; f++) {
      eventsSec[f].style.display = "none";
    }
    ratingSec.style.display = "block";
    bossSecState = false;
    itemsSecState = false;
    dungSecState = false;
    classSecState = false;
    eventsSecState = false;
    ratingSecState = true;
  }
  else {
    ratingSec.style.display = "none"
    ratingSecState = false;
  }
}




function NavbarTab() {
  if (navShown == false) {
    navBar.style.visibility = "visible";
    menuClose.style.opacity = "100";
    menuOpen.style.opacity = "0";
    menuOpen.style.transitionDuration = "1s";
    menuClose.style.transitionDuration = "1s";
    navShown = true;
  }

  else {
    navBar.style.visibility = "hidden";
    menuClose.style.opacity = "0";
    menuOpen.style.opacity = "100";
    menuOpen.style.transitionDuration = "1s";
    menuClose.style.transitionDuration = "1s";
    navShown = false;
  }
}

var accountTab = document.getElementById('account');
var accountShown = false;
function AccountTab() {
  if (accountShown == false) {
    accountTab.style.visibility = "visible";
    accountShown = true;
  }

  else {
    accountTab.style.visibility = "hidden";
    accountShown = false;
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}


