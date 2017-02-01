'use strict'

var shLayoutsCtrl = function($scope){
  var self = this

  self.update = function(layout){
    $scope.$emit('update:layout', layout)
  }

  self.layouts = [
    [
      { type: 'flex-row', value: 1}
    ],
    [
      { type: 'flex-column', value: 2}
    ],
    [
      { type: 'flex-column', value: 3}
    ],
    [
      { type: 'flex-column', value: 4}
    ],
    [
      { type: 'flex-row', value: 2}
    ],
    [
      { type: 'flex-row', value: 3}
    ],
    [
      { type: 'flex-row', value: 2},
      { type: 'flex-row', value: 2}
    ],
    [
      { type: 'flex-row', value: 1},
      { type: 'flex-row', value: 2},
      { type: 'flex-row', value: 1}
    ],
    [
      { type: 'flex-row', value: 1},
      { type: 'flex-row', value: 3},
      { type: 'flex-row', value: 1}
    ],
    [
      { type: 'flex-row', value: 2},
      { type: 'flex-row', value: 1},
      { type: 'flex-row', value: 2}
    ],
    [
      { type: 'flex-row', value: 3},
      { type: 'flex-row', value: 1},
      { type: 'flex-row', value: 2}
    ],
    [
      { type: 'flex-row', value: 2},
      { type: 'flex-row', value: 1},
      { type: 'flex-row', value: 3}
    ],
  ]

  return self
}

shLayoutsCtrl.$inject = ['$scope']

var shLayouts = {
  controller: shLayoutsCtrl,
  templateUrl: 'templates/sh-layouts.html'
}

angular.module('shellderApp').component('shLayouts', shLayouts)
