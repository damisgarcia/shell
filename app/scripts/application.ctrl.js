'use strict'

var ApplicationCtrl = function(){
  var self = this

  console.log("Loaded!")

  return self
}

angular.module('shellderApp').controller('ApplicationCtrl', ApplicationCtrl)
