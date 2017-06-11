'use strict';

import 'angular';

var aTodo=angular.module("todoApp",[]);
aTodo.controller("todocontrol",function($scope,$http){

    $http.get("https://jsonplaceholder.typicode.com/todos").then(function(response){
        //console.table(response.data);
        $scope.data=response.data; //data yazmazsan status, method fln geliyor
    })

/*
    $scope.data=[
        {"id":1,"body":"İlk Madde"},
        {"id":2,"body":"Yapılacaklardan 2. Madde"},
        {"id":3,"body":"Bu da son madde"},
    ];
*/

    $scope.addNewTodo = function(newData){

        $scope.data.push(
            {
                "userId": 77,
                "id": $scope.data.length + 1,
                "title": newData,
                "completed": false
              }

        );                                              // datayı json olarak push ettik
        $scope.text = '';                               // inputu boşaltır.

    }

});