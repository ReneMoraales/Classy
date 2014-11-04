Template.splashSignupModal.rendered = function(){
  $('#userSignupForm').validate({
    errorPlacement: function() { }
  });
}

Template.splashSignupModal.events({
  'click #signupTypeChoice .choice label': function(){
    $('#signupTypeChoice input:checked').removeAttr('checked');
    $(this).parents('.choice').find('input').attr('checked', 'checked');
  },
  'submit #userSignupForm': function(e){
    e.preventDefault();
    var formData = $('#userSignupForm').serializeObject();
    console.log(formData);

    var data = {
      profile: formData.profile,
      email: formData.signupEmail,
      password: formData.signupPassword
    }

    Accounts.createUser(data);
  }
});