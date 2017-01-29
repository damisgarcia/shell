'use strict'

var shDevice = {
  templateUrl: "templates/sh-device.html",
  controller: function($element){
    document.addEventListener("dragenter", function( event ) {
      $($element).find(".device").addClass('dragover')
    }, false);

    document.addEventListener("dragover", function( event ) {
      $($element).find(".device").removeClass('dragover')
    }, false);
  }
}

angular.module('shellderApp').component('shDevice', shDevice)
