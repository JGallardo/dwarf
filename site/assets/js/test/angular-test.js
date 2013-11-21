var app = angular.module('myApp', []);
app.controller('MyCtrl', function($scope) {


});
app.directive("sidebar",function(){
  return {
    restrict: 'A',
    templateUrl: "product-links-contact-rep.html.html",
    link : function(scope,element,attr) {
       // Do Great things here with your sidebar
    },
    }
});