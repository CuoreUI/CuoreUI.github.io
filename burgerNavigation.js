document.addEventListener("DOMContentLoaded", (event) => {

    const hamburgir = document.getElementsByClassName("hamburger-nav")[0];
    const hamburgirNavbuttons = document.getElementsByClassName("hamburger-navbuttons")[0];
console.log("found burger", hamburgir);

hamburgir.addEventListener("click", function() {
   let burgeractive = hamburgir.className.includes("hamburger-nav-active");

   if (burgeractive)
   {
   hamburgir.classList.remove("hamburger-nav-active");

   hamburgirNavbuttons.classList.remove("hamburger-navbuttons-active");
   }
   else
   {
    hamburgir.classList.add("hamburger-nav-active");

    hamburgirNavbuttons.classList.add("hamburger-navbuttons-active");
   }
}, false);

  });
  