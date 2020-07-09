/* Header - next product */

header_new_product = () => {
  
  const header_new_product_list = [
    { 
      image_front: "<img class='img-fluid d-block mx-auto fade-in' src='img/drawer/drawer-front-greige-black-tr.jpg' alt='drawer metal leg front'>",
      product_title: "<h4>Hanel</h4>" + "<p class='next-product-subtitle'>Cabinet with two drawers</p>",
      image_side: "<img class='img-fluid d-block mx-auto fade-in' src='img/drawer/drawer-side-greige-black-tr.png' alt='drawer metal leg side'>",
    },
    { 
      image_front: "<img class='img-fluid d-block mx-auto fade-in' src='img/ct1/ctable1-front-greige-black-tr.png' alt='club table metal leg front'>",
      product_title: "<h4>Elberg</h4>" + "<p class='next-product-subtitle'>Storage table with two drawers</p>",
      image_side: "<img class='img-fluid d-block mx-auto fade-in' src='img/ct1/ctable1-side-greige-black-tr.png' alt='club table metal leg side'>",
    },
    { 
      image_front: "<img class='img-fluid d-block mx-auto fade-in' src='img/table/table-front-greige-black-tr.png' alt='table metal leg front'>",
      product_title: "<h4>Bjorg</h4>" + "<p class='next-product-subtitle'>Table with two drawers</p>",
      image_side: "<img class='img-fluid d-block mx-auto fade-in' src='img/table/table-side-greige-black-tr.png' alt='table metal leg side'>",
    }
  ]

  const new_product_title = document.getElementById("new-product-title");
  const new_product_image_front = document.getElementById("new-product-image-front");
  const new_product_image_side = document.getElementById("new-product-image-side");
  const new_button = document.getElementById("next-product-btn");
  const new_product_counter = document.getElementById("new-product-counter");
  const next_product_title = document.getElementById("next-product-title");
  
  
  const add_content = (num) => { 	
    new_product_title.innerHTML = header_new_product_list[num].product_title;
    new_product_image_front.innerHTML = header_new_product_list[num].image_front;
    new_product_image_side.innerHTML = header_new_product_list[num].image_side;
    new_product_counter.innerHTML = "<p>" + "0" + (num + 1) + "/0" 
    + header_new_product_list.length + "</p>";
  }

  const next_product_title_onclick = (num) => {
    num >= header_new_product_list.length-1 ? next_product_title.innerHTML = 
    "<p>Next</p>" + header_new_product_list[0].product_title :
    next_product_title.innerHTML = "<p>Next</p>" 
    + header_new_product_list[num+1].product_title;
  }
  
  let num = 0;
  next_product_title_onclick(num);
  add_content(num);

  new_button.addEventListener("click", () => {
    num++;
    num >= header_new_product_list.length ? num = 0 : num;
    next_product_title_onclick(num);
    add_content(num);
  });
}

header_new_product();

/* PDP */

pdp = () => {

  // Variables and functions for replace the HOME content with PDP/CART content
  const pdp_sections = document.querySelectorAll(".pdp");

  hide = (section) => {
    section.style.display = "none";
  }

  show = (section) => {
    section.style.display = "block";
  }

  hide_home = () => {
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("special-offer").style.display = "none";
    document.getElementById("products-list").style.display = "none";
    document.getElementById("footer").style.display = "none";

    document.getElementById("cart-section").style.display = "none";
  }

  show_home = () => {
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("special-offer").style.display = "block";
    document.getElementById("products-list").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("cart-section").style.display = "none";
    pdp_sections.forEach(pdp_section => {
      hide(pdp_section);
    })
  }

  show_home();

  // Find the PDP based on the clicked product and replace the HOME content with pdp content
  const pdp_links = document.querySelectorAll("#product");

  for(let n = 0; n < pdp_links.length; n++) {
    pdp_links[n].addEventListener("click", () => { 

      // Get name attribute for clicked product link (the name is equal to PDP and btn-back)
      const i = pdp_links[n].getAttribute("name");
      const pdp = document.getElementById("product-description-" + i.toString());
      const btn_back = document.getElementById("btn-back-" + i.toString());

      show(pdp);
      hide_home();

      btn_back.addEventListener("click", () => {
        hide(pdp);
        show_home();
        window.scroll({behavior: "auto"});
        if (n <= 8) {
          window.location.href = "#products-list"
        } else if (n > 8) {
          window.location.href = "#footer"
        }
      }); 
      
      // Section for product image
      let image_section = document.getElementsByClassName("section-content-left-pdp");

      // Get section for product image based on the name attribute (if section name and clicked link name is equal, set basic image)
      let k = parseFloat(pdp_links[n].getAttribute("name"));
      k--;
      image_section[k].innerHTML = images_pdp[k].front_greige_black;
      
      // Conditions for image display
      image_condition = () => {
        if (buttons_rotation[0].className === "active" && 
          buttons_wood[0].className === "active" && 
          buttons_leg[0].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_greige_black;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[0].className === "active" && 
          buttons_leg[0].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_greige_black;
        } else if (buttons_rotation[0].className === "active" && 
          buttons_wood[0].className === "active" && 
          buttons_leg[1].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_greige_grey;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[0].className === "active" && 
          buttons_leg[1].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_greige_grey;
        } else if (buttons_rotation[0].className === "active" && 
          buttons_wood[0].className === "active" && 
          buttons_leg[2].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_greige_brown;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[0].className === "active" && 
          buttons_leg[2].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_greige_brown;
        }
        
        else if (buttons_rotation[0].className === "active" && 
          buttons_wood[1].className === "active" && 
          buttons_leg[0].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_honey_black;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[1].className === "active" && 
          buttons_leg[0].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_honey_black;
        } else if (buttons_rotation[0].className === "active" && 
          buttons_wood[1].className === "active" && 
          buttons_leg[1].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_honey_grey;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[1].className === "active" && 
          buttons_leg[1].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_honey_grey;
        } else if (buttons_rotation[0].className === "active" && 
          buttons_wood[1].className === "active" && 
          buttons_leg[2].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_honey_brown;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[1].className === "active" && 
          buttons_leg[2].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_honey_brown;
        }
        
        else if (buttons_rotation[0].className === "active" && 
          buttons_wood[2].className === "active" && 
          buttons_leg[0].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_bronze_black;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[2].className === "active" && 
          buttons_leg[0].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_bronze_black;
        } else if (buttons_rotation[0].className === "active" && 
          buttons_wood[2].className === "active" && 
          buttons_leg[1].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_bronze_grey;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[2].className === "active" && 
          buttons_leg[1].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_bronze_grey;
        } else if (buttons_rotation[0].className === "active" && 
          buttons_wood[2].className === "active" && 
          buttons_leg[2].className === "active") {
          image_section[k].innerHTML = images_pdp[k].front_bronze_brown;
        } else if (buttons_rotation[1].className === "active" && 
          buttons_wood[2].className === "active" && 
          buttons_leg[2].className === "active") {
          image_section[k].innerHTML = images_pdp[k].side_bronze_brown;
        }
      }

      // Get name attribute for clicked button rotation (two options: 1 - front preview; 2 - side preview)
      let buttons_rotation = document.querySelectorAll("#btn-rotate-" 
                            + i.toString());
      
      buttons_rotation.forEach(btn => {
        // Set basic rotation (add an active class)
        buttons_rotation[0].classList.add("active");
        buttons_rotation[1].classList.remove("active");

        // Change basic rotation (add an active class) to the clicked button
        btn.addEventListener("click", () => {
          buttons_rotation.forEach(btn => {
            btn.classList.remove("active");
          });
          btn.classList.add("active");
          image_condition();
        });
      });

      // Get name attribute for clicked button wood color (three options: 1 - greige; 2 - honey; 3 - bronze)
      let buttons_wood = document.querySelectorAll("#btn-wood-color-" 
                        + i.toString());

      buttons_wood.forEach(btn_wood => {
        // Set basic wood color (add an active class)
        buttons_wood[0].classList.add("active");
        buttons_wood[1].classList.remove("active");
        buttons_wood[2].classList.remove("active");

        // Change basic wood color (add an active class) to the clicked button
        btn_wood.addEventListener("click", () => {
          buttons_wood.forEach(btn_wood => {
            btn_wood.classList.remove("active");
          });
          btn_wood.classList.add("active");
          image_condition();
        });
      });

      // Get name attribute for clicked button leg color (three options: 1 - black; 2 - grey; 3 - brown)
      let buttons_leg = document.querySelectorAll("#btn-leg-color-" 
                        + i.toString());

      buttons_leg.forEach(btn_leg => {
        // Set basic wood color (add an active class)
        buttons_leg[0].classList.add("active");
        buttons_leg[1].classList.remove("active");
        buttons_leg[2].classList.remove("active");

        btn_leg.addEventListener("click", () => {
          buttons_leg.forEach(btn_leg => {
            btn_leg.classList.remove("active");
          });
          btn_leg.classList.add("active");
          image_condition();
        });
      });
      
    });
  };

}

pdp();

/* Smooth scroll - custom links*/

smooth_links = () => {

  const smooth_link = document.querySelectorAll("#smooth-link");

  smooth_link.forEach(smooth => {
    smooth.addEventListener("click", function (e) {
      e.preventDefault();
    
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

};