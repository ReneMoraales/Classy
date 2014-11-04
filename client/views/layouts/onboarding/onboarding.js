Template.onboardingLayout.events({
  'change #onboardingPictureInput': function(e){
    var input = e.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(re) {
        $('#onboardingPictureInput').addClass('not-empty').css('background-image', 'url('+re.target.result+')');
        $('#onboardingPicture .cl-header-forward').fadeIn();
      }
      reader.readAsDataURL(input.files[0]);
    } else {
      $('#onboardingPictureInput').removeClass('not-empty');
    }
  }
})