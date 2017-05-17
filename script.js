    // Apparition menu

      $(document).ready(function () {

      $(".bbjmenu2").click(function() {
        $(".bbjcontainer").css({display: 'block'});
      $("body").css({filter: 'blur(5px)'});
      });

      $(".croix").click(function() {

        $(".bbjcontainer").css({display: 'none'});
        $("body").css({filter: 'none'});
      });
});
