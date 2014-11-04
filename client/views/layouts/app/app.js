Template.appLayout.rendered = function(){
  snapper = new Snap({
    element: document.getElementById('app'),
    dragger: document.getElementById('menuToggle'),
    disable: 'right',
    hyperextensible: false
  })
};

Template.appLayout.destroyed = function(){
  $('body').removeClass('snapjs-left')
}