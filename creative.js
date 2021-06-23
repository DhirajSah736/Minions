function showHide() {
    let btn = document.getElementById("btn");
    let para = document.getElementById("para");

    if (para.style.display == "none") {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  }