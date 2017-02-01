'use strict'

var shLayoutCtrl = function($element){
  var self = this
  var html = ''

  self.$onInit = function(){
    angular.forEach(self.data, function(form){
      if(angular.isObject(form)){

      }
    })
  }

  return self
}

shLayoutCtrl.$inject = []

var shLayout = {
  bidding:{
    data: '='
  },
  controller: shLayoutCtrl
}

angular.module('shellderApp').component('shLayout', shLayout)
