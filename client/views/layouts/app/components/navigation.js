Template.appNavigation.events({
  'click a': function(e){
    $('#appNavigation li.active').removeClass('active');
    $(e.target).parents('li').addClass('active');
  }
})