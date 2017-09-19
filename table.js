function load3x3() {

  for(var id = 1; id <= 9; id++) {
    if(9 % id === 0) {
      var div = document.createElement('div');
      div.className = "divrow";
      document.getElementById("mainTable").appendChild(div);
    }
  }
}

function load4x4() {
  alert(8);
}