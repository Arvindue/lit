angular.module('literature')
	.controller('addarticleCtrl',function($scope){
	    $scope.addarticleform = {
                                    "articletitle" : $scope.articletitle,
                                    "articlelanguage":$scope.articlelanguage,
                                    "writtenby": $scope.writtenby,
                                    "category" : $scope.category,
                                    "description" : $scope.description
                                };
    $scope.master = {};
    $scope.update = function(article){
        angular.copy(article,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.subscriberform);
            $http.post('localhost:3030/addArticle/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });