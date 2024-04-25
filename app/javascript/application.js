// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require semantic-ui

import "@hotwired/turbo-rails"
import "controllers"
import "jquery" 

$(document).on('turbo:load',()=>{
  console.log('loaded turbo links')
  $('.ui.dropdown').dropdown()
})
