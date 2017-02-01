'use strict';

angular.module('shellderApp')
  .directive('shFragmentDraggable', ['$document', function($document) {
    return {
      scope: {
        shFragmentDraggable: '=',
        parent: '@'
      },
      link: function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;

        element.on('mousedown', function(event) {
          event.preventDefault();

          y = scope.shFragmentDraggable.top
          x = scope.shFragmentDraggable.left
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        if(scope.parent){
          element.closest(scope.parent).on('mousedown', function(event){
            event.preventDefault();
            if(scope.shFragmentDraggable.$setting){
              startX = event.pageX - x;
              startY = event.pageY - y;
              $document.on('mousemove', mousemove);
              $document.on('mouseup', mouseup);
            }
          })
        }

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          scope.shFragmentDraggable.top = y;
          scope.shFragmentDraggable.left = x;
          scope.$apply()
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      }
    };
  }]);
