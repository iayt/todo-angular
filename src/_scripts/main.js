// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'angular';

  
console.log('todoAngular Project');



var aTodo=angular.module("todoApp",[]);
aTodo.controller("todocontrol",function($scope){

    $scope.data=[
        {"id":1,"body":"İlk Madde"},
        {"id":2,"body":"Yapılacaklardan 2. Madde"},
        {"id":3,"body":"Bu da son madde"},
    ];

});