
angular.module('literature')
	.controller('addjobCtrl',function($scope){
	    $scope.addjobform = {
                                    "jobtitle" : $scope.jobtitle,
                                    "category":$scope.category,
                                    "postedby": $scope.postedby,
                                    "description" : $scope.description
                            
                                };
    $scope.master = {};
    $scope.update = function(job){
        angular.copy(job,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addjobform);
            $http.post('localhost:3030/addjob/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });