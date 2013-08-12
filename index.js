var mod = window.angular.module('ngEnter', []);

mod.directive('ngEnter', function () {

  return function (scope, element, attrs) {

    element.bind('keydown', function (event) {

      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();

      }

    });

  };

});

module.exports = 'ngEnter';
