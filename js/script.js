$(document).ready(function() {
    const navigation = document.querySelector(".navbar");
  
    const setScrollPadding = () => {
      const navigationHeight = navigation.offsetHeight;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight + "px"
      );
    };
  
    $('a.nav-link').click(function() {
      $('a.nav-link').removeClass('active');
      $(this).addClass('active');
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
      return false;
    });
  
    window.addEventListener("resize", setScrollPadding);
    setScrollPadding();
  });