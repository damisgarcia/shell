'use strict'

var shDeviceCtrl = unction($element){
  var self = this
  var element = $element

  // Prevent
  window.addEventListener('drop',function(e){
    e = e || event;
    e.preventDefault();
    $(element).find('.device').removeClass('dragover')
  },false);

  window.addEventListener('dragover',function(e){
    e = e || event;
    e.preventDefault();
  },false);

  window.addEventListener('dragend',function(e){
    e = e || event;
    e.preventDefault();
    $(element).find('.device').removeClass('dragover')
  },false);

  window.addEventListener('dragenter',function(e){
    e = e || event;
    e.preventDefault();
    $(element).find('.device').addClass('dragover')
  },false);

  return self
}

shDeviceCtrl.$inject = ['$element']


var shDevice = {
  templateUrl: 'templates/sh-device.html',
  controller: shDeviceCtrl
}

angular.module('shellderApp').component('shDevice', shDevice)
