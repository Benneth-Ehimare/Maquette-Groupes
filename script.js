    // Apparition menu

      $(document).ready(function () {

      $(".bbjmenu2").click(function() {
        $(".bbjcontainer").css({display: 'block'});
      $("body > *:not(.bbjcontainer)").css({filter: 'blur(5px)'});
      });

      $(".croix").click(function() {

        $(".bbjcontainer").css({display: 'none'});
        $("body > *:not(.bbjcontainer)").css({filter: 'none'});
      });
});
