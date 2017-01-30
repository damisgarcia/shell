'use strict'

var shFragmentCtrl = function($scope, $element){
  var self = this
  var element = $element

  self.loadPicture = function(file){
    self.file = file
    self.top = 0
    self.left = 0
    self.scale = 1
    self.element = element
    element.parent().removeClass('dragover')
  }

  self.toggleSetting = function(){
    self.$setting = !self.$setting
    self.$setting ? $scope.$emit('fragment:setting:enable', self) : $scope.$emit('fragment:setting:enable', null)
  }
}

var shFragment = {
  templateUrl: "templates/sh-fragment.html",
  controller: shFragmentCtrl
}

angular.module('shellderApp').component('shFragment', shFragment)
