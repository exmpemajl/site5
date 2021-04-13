$(document).ready(function(){
	$('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__contact').toggleClass('active');
        $('body').toggleClass('lock');
    });
	$(".accordion-item__trigger").click(function(){
		$(this).next(".accordion-item__content").slideToggle();
		$(".accordion-item__trigger").toggleClass("active1");
	});
	
});