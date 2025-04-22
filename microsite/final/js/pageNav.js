// function pageNav() {
//     console.log("pageNav toggle triggered!");
//     const x = document.getElementById("pageNav");
//     x.classList.toggle("responsive");
//   }


// https://www.youtube.com/watch?v=9nh0snfJ7Ao

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behvior : "smooth"
  })
})
