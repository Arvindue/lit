
angular.module('literature')
	.controller('addflashslideCtrl',function($scope){
	    $scope.addflashslideform = {
                                    "personalityname" : $scope.personalityname,
                                };
    $scope.master = {};
    $scope.update = function(slide){
        angular.copy(slide,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addflashslideform);
            $http.post('localhost:3030/addflashslide/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
            
            
        } */
    });