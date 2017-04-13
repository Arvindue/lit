angular.module('literature')
	.controller('adminpanelCtrl',['$scope',function($scope){
	$scope.categories = [
    	'None',
      'Title',
      'Url',
      'Language',
      'Writer',
      'Speaker',
      'Coverurl',
      'Description'
    ];
	 $scope.newObject = {};
	    $scope.adminpanelform = {
                                    "uploadetype" : $scope.uploadname,
                                    
                                };
    $scope.master = {};
    $scope.update = function(category){
        angular.copy(category,$scope.master);
		console.log(category);
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
    }]);