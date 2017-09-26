window.onload="load3x3()";

function load3x3() {


  var array = new Object();

  var table = document.getElementById("mainTable");
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  table.style.width = 140;

  for(var id = 1; id <= 9; id++) {
    array[id]  = id;
    var div = document.createElement('div');
    div.id = id;
    div.className = "case";
    if(id < 9) {
      div.innerHTML = id;
    }
    document.getElementById("mainTable").appendChild(div);
  }

}

function load4x4() {

  var array = new Object();

  var table = document.getElementById("mainTable");
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  table.style.width = 180;

  for(var id = 1; id <= 16; id++) {
    array[id]  = id;
    var div = document.createElement('div');
    div.id = id;
    if(id < 16) {
      div.innerHTML = id;
    }
    div.className = "case";
    document.getElementById("mainTable").appendChild(div);
  }
}