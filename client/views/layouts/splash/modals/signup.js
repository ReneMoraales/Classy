Template.splashSignupModal.events({
  'click #signupTypeChoice .choice label': function(){
    $('#signupTypeChoice input:checked').removeAttr('checked');
    $(this).parents('.choice').find('input').attr('checked', 'checked');
  }
});