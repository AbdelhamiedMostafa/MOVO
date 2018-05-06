var login_tab = $('#login');
var signup_tab = $('#signup');

var login_form = $('#login-form');
var signup_form = $('#signup-form');

$( document ).ready(function functionName() {
});

login_tab.click(function functionName() {

  if (!login_tab.hasClass("active-tab")) {
    login_tab.toggleClass("active-tab");
    signup_tab.toggleClass("active-tab");
    login_form.toggle();
    signup_form.toggle();
  }


});
signup_tab.click(function functionName() {

  if (!signup_tab.hasClass("active-tab")) {
    login_tab.toggleClass("active-tab");
    signup_tab.toggleClass("active-tab");
    signup_form.toggle();
    login_form.toggle();
  }


});

$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});
