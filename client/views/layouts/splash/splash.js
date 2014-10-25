Template.splashLayout.rendered = function(){
  setTimeout(function(){ $('h1.hidden').removeClass('hidden'); }, 500);
  setTimeout(function(){ $('.lead.hidden').delay(500).removeClass('hidden'); }, 1000);
  setTimeout(function(){ $('.actions.hidden').delay(1000).removeClass('hidden'); }, 1750);
}

Template.splashLayout.events({

})