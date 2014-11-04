Template.layout.helpers({
  isNewUser: function(){
    if ( Meteor.user() ) {
      var user = Meteor.user();
      if ( !user.profile.classes || user.profile.classes.length == 0 ) {
        return true;
      }
    }
    return false;
  }
});

Template.layout.events({
  'click [data-go-screen]': function(e){
    var button = $(e.target);
    var direction = button.attr('data-go-screen');
    var layout = button.parents('.layout');
    var currentScreen = button.parents('.layout-screen');
    var currentScreenNumber = parseInt(currentScreen.attr('data-screen'));
    if ( direction == 'forward' ) {
      var nextScreenNumber = currentScreenNumber+1;
      var nextScreen = layout.find('.layout-screen[data-screen="'+nextScreenNumber+'"]');
      if ( nextScreen.length > 0 ) {
        currentScreen.addClass('past');
        nextScreen.removeClass('future');
      }
    } else if ( direction == 'back' ) {
      var pastScreenNumber = currentScreenNumber-1;
      var pastScreen = layout.find('.layout-screen[data-screen="'+pastScreenNumber+'"]');
      if ( pastScreen.length > 0 ) {
        currentScreen.addClass('future');
        pastScreen.removeClass('past');
      }
    }
  }
})