document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("collapsible-active"); // Change to a more specific class name
        var content = this.parentElement.nextElementSibling;
      
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
}
  });


  