'use strict'

var shFragmentCtrl = function(){
  var self = this

  self.loadPicture = function(file){
    self.file = file
  }
}

var shFragment = {
  templateUrl: "templates/sh-fragment.html",
  controller: shFragmentCtrl
}

angular.module('shellderApp').component('shFragment', shFragment)
