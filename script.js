    // Apparition menu

      $(document).ready(function () {
      $(".bbjmenu2").click(function() {
        $(".bbjcontainer").css({display: 'block'});
      });
});

$(document).ready(function () {

      $(".croix").click(function() {

        $(".bbjcontainer").css({display: 'none'});
      });
});


/**
 * Created by audric on 16/05/17.
 */
$(document).ready(function () {

    // Hover portfolio
    $('.portfolio div div div').hover(function () {
        $(this).css("background-color", "rgba(0,0,0,0.2)");
    });
});
   
    
