$(document).ready(function(){
  $(".nonloop, .owl-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 290,
    dots: true,
    responsive:{
      1500:{
        margin: 270
      },
      1200:{
        margin: 210
      },
      992:{
        margin: 220
      },
      768:{
        margin: 180
      },
      576:{
        margin: 120
      },
      437:{
        margin: 10,
        items: 1
      },
      0:{
        margin: 10,
        items: 1
      }
    }
  });
  
  /* OWL left section content*/

  var item_content = [
    {
      item_title: "<div class='fade-in'><p>Coffee Table - classic</p>" + "<h2>Verde</h2></div>",
      item_subtitle: "<div class='fade-in'><p>Coffee table - classic line. Three available wood designs and metal legs. The clean and simple design gives the table proven function and attractiveness.</p></div>",
      item_button: "<a id='smooth-link' href='#specoff' class='fade-in'><button type='button' class='btn btn-secondary'>Learn more</button></a>"
    },
    {
      item_title: "<div class='fade-in'><p>Coffee Table</p>" + "<h2>Lund</h2></div>",
      item_subtitle: "<div class='fade-in'><p>Coffee table. Three available wood designs and metal legs. The clean and simple design gives the table proven function and attractiveness.</p></div>",
      item_button: "<a id='smooth-link' href='#specoff' class='fade-in'><button type='button' class='btn btn-secondary'>Learn more</button></a>"
    },
    {
      item_title: "<div class='fade-in'><p>Table - classic</p>" + "<h2>Stage</h2></div>",
      item_subtitle: "<div class='fade-in'><p>Table - classic line. Three available wood designs and metal legs. The clean and simple design gives the table proven function and attractiveness.</p></div>",
      item_button: "<a id='smooth-link' href='#specoff' class='fade-in'><button type='button' class='btn btn-secondary'>Learn more</button></a>"
    },
    {
      item_title: "<div class='fade-in'><p>TV bench - classic</p>" + "<h2>Norby</h2></div>",
      item_subtitle: "<div class='fade-in'><p>TV bench - classic line. Three available wood designs and metal legs. Blum solution for fittings gives a proven function and perfect design.</p></div>",
      item_button: "<a id='smooth-link' href='#specoff' class='fade-in'><button type='button' class='btn btn-secondary'>Learn more</button></a>"
    }
  ]
 
  const owl_item_title = $("#owl-item-title");
  const owl_item_subtitle = $("#owl-item-subtitle");
  const owl_item_button = $("#owl-item-button");

  const add_content = (i) => { 	
    $(owl_item_title).html(item_content[i].item_title);
    $(owl_item_subtitle).html(item_content[i].item_subtitle);
    $(owl_item_button).html(item_content[i].item_button);
  }

  let i = 0;
  add_content(i);

  $(".owl-dots").click(function() {

    const owl_dots_num = $(".owl-dots").children();
    
    for (let i = 0; i < owl_dots_num.length; i += 1) {
      const item = $(".owl-dots").children()[i];
      if ($(item).hasClass("active") === true) {
        add_content(i);
      }
    };
  });
  
  /* Smooth scroll - custom links*/
  
  $("#smooth-link").on("click", function(e) {
    e.preventDefault();
  
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 500);
  });
  
});