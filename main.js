var about = document.getElementById("about");
const modal_container = document.getElementById("modal_container");
const room = document.getElementById("room");
const close = document.getElementById("close");
const closePic = document.getElementById("closePic");
const modal_viewer = document.getElementById("modal_viewer");
var grid_item = document.getElementById("grid_item");
var grid_item1 = document.getElementById("grid_item1");
var ylgalt = document.getElementById("ylgalt");
var tuluv = document.getElementById("tuluv");
var about1 = document.getElementById("about1");
var about2 = document.getElementById("about2");
var about3 = document.getElementById("about3");
var about4 = document.getElementById("about4");
var about5 = document.getElementById("about5");
var about6 = document.getElementById("about6");
var about7 = document.getElementById("about7");
var about8 = document.getElementById("about8");
var about9 = document.getElementById("about9");
var about10 = document.getElementById("about10");
var about11 = document.getElementById("about11");
var about12 = document.getElementById("about12");
var about13 = document.getElementById("about13");
var about14 = document.getElementById("about14");
var about15 = document.getElementById("about15");
var about16 = document.getElementById("about16");
var about17 = document.getElementById("about17");
var about18 = document.getElementById("about18");
var about19 = document.getElementById("about19");
var about20 = document.getElementById("about20");
var about21 = document.getElementById("about21");
var about22 = document.getElementById("about22");
var about23 = document.getElementById("about23");
var about24 = document.getElementById("about24");
var about25 = document.getElementById("about25");
var about26 = document.getElementById("about26");
var about27 = document.getElementById("about27");
var about28 = document.getElementById("about28");
var about29 = document.getElementById("about29");

function ButtonBg() {
  document.getElementById("about").style.background = "#c9302c";
  document.getElementById("about1").style.background = "#337ab7";
  document.getElementById("about2").style.background = "#c9302c";
  document.getElementById("about3").style.background = "#ffd700";
  document.getElementById("about4").style.background = "#c9302c";
  document.getElementById("about5").style.background = "#337ab7";
  document.getElementById("about6").style.background = "#c9302c";
  document.getElementById("about7").style.background = "#ffd700";
  document.getElementById("about8").style.background = "#c9302c";
  document.getElementById("about9").style.background = "#337ab7";
  document.getElementById("about10").style.background = "#c9302c";
  document.getElementById("about11").style.background = "#337ab7";
  document.getElementById("about12").style.background = "#c9302c";
  document.getElementById("about13").style.background = "#ffd700";
  document.getElementById("about14").style.background = "#c9302c";
  document.getElementById("about15").style.background = "#ffd700";
  document.getElementById("about16").style.background = "#c9302c";
  document.getElementById("about17").style.background = "#ffd700";
  document.getElementById("about18").style.background = "#c9302c";
  document.getElementById("about19").style.background = "#337ab7";
  document.getElementById("about20").style.background = "#ffd700";
  document.getElementById("about21").style.background = "#337ab7";
  document.getElementById("about22").style.background = "#c9302c";
  document.getElementById("about23").style.background = "#c9302c";
  document.getElementById("about24").style.background = "#c9302c";
  document.getElementById("about25").style.background = "#337ab7";
  document.getElementById("about26").style.background = "#c9302c";
  document.getElementById("about27").style.background = "#337ab7";
  document.getElementById("about28").style.background = "#c9302c";
  document.getElementById("about29").style.background = "#ffd700";
}
/*modal_viewer.addEventListener("click", viewModal);

function viewModal() {
    console.log(123);
    //modal_viewer.classList.add("show");

}*/
about1.addEventListener("click", showModal);
about2.addEventListener("click", showModal);
about3.addEventListener("click", showModal);
about4.addEventListener("click", showModal);
about5.addEventListener("click", showModal);
about6.addEventListener("click", showModal);
about7.addEventListener("click", showModal);
about8.addEventListener("click", showModal);
about9.addEventListener("click", showModal);
about10.addEventListener("click", showModal);
about11.addEventListener("click", showModal);
about12.addEventListener("click", showModal);
about13.addEventListener("click", showModal);
about14.addEventListener("click", showModal);
about15.addEventListener("click", showModal);
about16.addEventListener("click", showModal);
about17.addEventListener("click", showModal);
about18.addEventListener("click", showModal);
about19.addEventListener("click", showModal);
about20.addEventListener("click", showModal);
about21.addEventListener("click", showModal);
about22.addEventListener("click", showModal);
about23.addEventListener("click", showModal);
about24.addEventListener("click", showModal);
about25.addEventListener("click", showModal);
about26.addEventListener("click", showModal);
about27.addEventListener("click", showModal);
about28.addEventListener("click", showModal);
about29.addEventListener("click", showModal);
tuluv.addEventListener("click", changeStatus);
tuluv.addEventListener("click", changeStatus1);

function changeStatus() {
  console.log(4567);
  grid_item.classList.add("show");
}

function changeStatus1() {
  console.log(4567);
  grid_item1.classList.add("show");
}

room.addEventListener("click", viewRoom);

function viewRoom() {
  console.log(123);
  modal_viewer.classList.add("show");
}

about.addEventListener("click", showModal);

function showModal() {
  console.log(123);
  modal_container.classList.add("show");
}

close.addEventListener("click", hideModal);

function hideModal() {
  console.log(123);
  modal_container.classList.remove("show");
}
closePic.addEventListener("click", hidePic);

function hidePic() {
  console.log(123);
  modal_viewer.classList.remove("show");
}
