
angular.module('literature')
	.controller('adduserCtrl',function($scope){
	    $scope.adduserform = {
                                    "name" : $scope.name,
                                    "mobile":$scope.mobile,
                                    "emailiD": $scope.emailid,
                                    "country" : $scope.country,
                                    "city" : $scope.city,
                                    "userrole" : $scope.userrole,
                                    "answer" : $scope.answer
                                };
    $scope.master = {};
    $scope.update = function(manager){
        angular.copy(manager,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.adduserform);
            $http.post('localhost:3030/adduser/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });