const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
 hamburger.classList.toggle("active");   
navMenu.classList.toggle("active"); 
    
})
document.querySelectorAll("-nav-link"). forEach(n => n. 
    addEventListener ("click", () => {
    hamburger. classList.remove("active")
    navMenu. classList.remove("active")
     }))
     function validateForm() {
        let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
      function onSubmit(e) {
        e.preventDefault();
        const $elements = $form.elements;
        console.log($elements);
      }
      
      const $form = document.querySelector('form');
      const $submitBtn = $form.querySelector('button');
      
      $submitBtn.addEventListener('click', onSubmit); 
      
      
      