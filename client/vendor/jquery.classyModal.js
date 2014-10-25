/* Classy modals for jQuery */

$(document).on('click', '[data-classy-toggle="modal"]', function(){
  var target = $(this).attr('data-classy-target');
  $(target).classyModal();
});

$.fn.extend({
  classyModal: function(a){
    if ( typeof a === 'undefined' || a == 'show' ) {
      var modal = $(this);

      $('body').addClass('cl-modal-open');
      modal.addClass('open');

      var closeButton = $(this).find('.cl-modal-close');
      if ( closeButton.length > 0 && !closeButton.data('binded') ) {
        closeButton.on('click', function(){
          modal.classyModal('hide');
        });
        closeButton.data('binded', true);
      }

      return $(this);
    } else if ( a == 'hide' ) {
      $('body').removeClass('cl-modal-open');
      $(this).removeClass('open');
      return $(this);
    }
  }
})