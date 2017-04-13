
angular.module('literature')
	.controller('subscriberCtrl',function($scope){
	    $scope.subscriberform = {
                                    "name" : $scope.name,
                                    "mobileNo":$scope.mobileNo,
                                    "emailID": $scope.emailId,
                                    "country" : $scope.country,
                                    "city" : $scope.city
                                };
    $scope.master = {};
    $scope.update = function(user){
        angular.copy(user,$scope.master);
    };
    
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.subscriberform);
            $http.post('localhost:3030/createSubscriber/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });