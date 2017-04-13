
angular.module('literature')
	.controller('addvideoCtrl',function($scope){
	    $scope.addvideoform = {
                                    "videotitle" : $scope.videotitle,
                                    "speechby":$scope.speechby,
                                    "category": $scope.category,
                                    "description" : $scope.description
                                    
                                };
    $scope.master = {};
    $scope.update = function(video){
        angular.copy(video,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addvideoform);
            $http.post('localhost:3030/createaddvideo/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });