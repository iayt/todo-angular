'use strict';

import 'angular';

var aTodo=angular.module("todoApp",[]);
aTodo.controller("todocontrol",function($scope){

    $scope.data=[
        {"id":1,"body":"İlk Madde"},
        {"id":2,"body":"Yapılacaklardan 2. Madde"},
        {"id":3,"body":"Bu da son madde"},
    ];

    $scope.addNewTodo = function(newData){

        $scope.data.push({"id": 10,"body": newData});   // datayı json olarak push ettik
        $scope.text = '';                               // inputu boşaltır.

    }

});