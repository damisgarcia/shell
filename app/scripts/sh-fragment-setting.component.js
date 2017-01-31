'use strict'

var shFragmentSettingCtrl = function($rootScope, $element){
  var self = this
  var element = $element

  var MOVEPROGRESS = 0.02
  var fragmentWidth = null
  var fragmentHeigth = null
  var startY = 0
  var startX = 0
  var x = 0
  var y = 0

  var toNegative = function(number){
    return number * -1
  }

  self.moveLeft = function(e){
    if(self.fragment.left < 0){
      self.fragment.left += (fragmentWidth * MOVEPROGRESS)
    }
  }

  self.moveRight = function(e){
    // Math.abs send number to negative value
    if(self.fragment.left > toNegative(fragmentWidth)){
      self.fragment.left -= (fragmentWidth * MOVEPROGRESS)
    }
  }

  self.moveTop = function(e){
    if(self.fragment.top > toNegative(fragmentHeigth)){
      self.fragment.top += (self.fragment.element.find('img').height() * MOVEPROGRESS)
    }
  }

  self.moveBottom = function(e){
    // Math.abs send number to negative value
    if(self.fragment.top < fragmentHeigth){
      self.fragment.top -= (self.fragment.element.find('img').height() * MOVEPROGRESS)
    }
  }

  $rootScope.$on('fragment:setting:enable', function(e, fragment){
    self.fragment = fragment

    if(angular.isObject(self.fragment)){
      $rootScope.$editing = true
      fragmentWidth = self.fragment.element.find('img').width()
      fragmentHeigth = self.fragment.element.find('img').height()
    } else{
      $rootScope.$editing = false
    }
  })

  return self
}

shFragmentSettingCtrl.$inject = ['$rootScope', '$element']

var shFragmentSetting = {
  templateUrl: 'templates/sh-fragment-setting.html',
  controller: shFragmentSettingCtrl
}

angular.module('shellderApp').component('shFragmentSetting', shFragmentSetting)
