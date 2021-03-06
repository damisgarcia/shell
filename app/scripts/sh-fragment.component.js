'use strict'

var shFragmentCtrl = function($scope, $element){
  var self = this
  var element = $element

  self.loadPicture = function(file){
    self.file = file
    self.left = 0
    self.top =  0
    self.scale = 1
    self.element = element
    element.parent().removeClass('dragover')
  }

  self.toggleSetting = function(){
    self.$setting = !self.$setting
    self.$editing = !self.$editing
    self.$setting ? $scope.$emit('fragment:setting:enable', self) : $scope.$emit('fragment:setting:enable', null)
  }
}

shFragmentCtrl.$inject = ['$scope', '$element']

var shFragment = {
  templateUrl: 'templates/sh-fragment.html',
  controller: shFragmentCtrl
}

angular.module('shellderApp').component('shFragment', shFragment)
