    // Apparition menu

$(document).ready(function () {

      $(".croix").click(function() {

        $(".bbjcontainer").css({display: 'none'});
      });
});

      $(document).ready(function () {
      $(".bbjmenu2").click(function() {
        $(".bbjcontainer").css({display: 'block'});
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
   
    
