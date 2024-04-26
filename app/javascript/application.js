// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require semantic-ui

import "@hotwired/turbo-rails"
import "controllers"
import "jquery" 
import "semantic-ui"

$(document).on('turbo:load',()=>{
  $('.ui.dropdown').dropdown();

$('.message .close').on('click', function() {
           $(this).closest('.message')
       .transition('fade')
    ;
  })
;
})

