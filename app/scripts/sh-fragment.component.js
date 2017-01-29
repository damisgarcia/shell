'use strict'

var shFragmentCtrl = function($element){
  var self = this
  var element = $element

  self.loadPicture = function(file){
    self.file = file
    element.parent().removeClass('dragover')
  }
}

var shFragment = {
  templateUrl: "templates/sh-fragment.html",
  controller: shFragmentCtrl
}

angular.module('shellderApp').component('shFragment', shFragment)
