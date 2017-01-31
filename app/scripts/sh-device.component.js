'use strict'

var shDeviceCtrl = function($element, $rootScope){
  var self = this
  var element = $element


  self.layout = [{ type: 'flex-row', value: 1}]

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

  $rootScope.$on('update:layout', function(e, layout){
    self.layout = layout
  })

  return self
}

shDeviceCtrl.$inject = ['$element', '$rootScope']


var shDevice = {
  templateUrl: 'templates/sh-device.html',
  controller: shDeviceCtrl
}

angular.module('shellderApp').component('shDevice', shDevice)
