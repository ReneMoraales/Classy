Template.splashLoginModal.rendered = function(){
  $('#userLoginForm').validate();
}

Template.splashLoginModal.destroyed = function(){
  $('body').removeClass('cl-modal-open');
}

Template.splashLoginModal.events({
  'submit #userLoginForm': function(e){
    e.preventDefault();
    var formData = $('#userLoginForm').serializeObject();
    Meteor.loginWithPassword(formData.loginEmail, formData.loginPassword);
  }
});