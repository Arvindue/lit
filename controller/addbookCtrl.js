angular.module('literature')
	.controller('addbookCtrl',function($scope){
	    $scope.addbookform = {
                                    "booktitle" : $scope.booktitle,
                                    "bookwriter" : $scope.bookwriter,
            "publisher" : $scope.publisher,
                                    "category" : $scope.category,
                                    //"bookcover" : $scope.bookcover,
            "pages" : $scope.pages,
                                    
                                    "description" : $scope.description
                                };
    $scope.master = {};
    $scope.update = function(book){
        angular.copy(book,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addbookform);
            $http.post('localhost:3030/addbook/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });