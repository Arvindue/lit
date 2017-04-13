
angular.module('literature')
	.controller('addpersonalityCtrl',function($scope){
	    $scope.addpersonalityform = {
                                    "name" : $scope.name,
                                    "language":$scope.language,
                                    "writtenby": $scope.writtenby,
                                    "category": $scope.category,
                                    "description" :             $scope.description
                            
                                };
    $scope.master = {};
    $scope.update = function(personality){
        angular.copy(personality,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addpersonalityform);
            $http.post('localhost:3030/addpersonality/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });