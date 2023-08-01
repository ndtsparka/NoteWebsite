var page = document.getElementById("successPage");
var func = document.getElementById("logIn");
var closee = document.getElementsByClassName("close")[0];
func.onclick = function() {
  page.style.display = "block";
}
closee.onclick = function() {
  page.style.display = "none";
}

