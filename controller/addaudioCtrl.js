angular.module('literature')
	.controller('addaudioCtrl',function($scope){
	    $scope.addaudioform = {
                                    "audiotitle" : $scope.audiotitle,
                                    
                                    "speaker" : $scope.speaker,
                                    "category" : $scope.category,
                                    //"audiocover" : $scope.audiocover,
                                    "audiolink" : $scope.audiolink,
                                    "description" : $scope.description
                                };
    $scope.master = {};
    $scope.update = function(audio){
        angular.copy(audio,$scope.master);
    };
    
        
        /*$scope.getformData = function () 
        {
            console.log($scope.addaudioform);
            $http.post('localhost:3030/addaudio/',$scope.master).then(function(res)
            {
                
            },
            function(){
                
            });
       
            
        } */
    });