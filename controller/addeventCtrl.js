angular.module('literature')
	.controller('addeventCtrl',function($scope){
	    $scope.addeventform = {
                                    "eventtitle" : $scope.eventtitle,
                                    
                                    "eventby" : $scope.eventby,
                                    "country" : $scope.country,
                                    "city" : $scope.city,
                                    "description" : $scope.description,
            "address" : $scope.address
                                };
    $scope.master = {};
    $scope.update = function(event){
        angular.copy(event,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addeventform);
            $http.post('localhost:3030/addevent/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });