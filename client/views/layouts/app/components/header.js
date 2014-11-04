Template.appHeader.events({
  'click #menuToggle': function(){
    if ( $('body').is('.snapjs-left') ) {
      snapper.close();
    } else {
      snapper.open('left');
    }
  }
})