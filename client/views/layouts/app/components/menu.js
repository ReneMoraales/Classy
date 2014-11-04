Template.appMenu.events({
  'click #logout': function(){
    Meteor.logout();
  }
})