angular.module("literature", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state("login", {
		url:"/Login",
        templateUrl : "template/login.html"
//		controller:"loginCtrl"
    })
    
    .state("home", {
		"url":"/",
//		'controller':function(){console.log("Home controller")},
        views:{
            "nav":{
                templateUrl:"template/nav.html"
            },
            "footer":{
                templateUrl:"template/footer.html"
            }
        }
//        'templateUrl' : "template/home.htm"
    })
    
	.state("home.mainHome", {
		url:"mainHome",
        templateUrl : "template/home.html",
		controller:function(){
            console.log("inside");
        }    
    })
	
	.state("home.Adminpanel", {
		url:"Adminpanel",
        templateUrl : "template/adminpanel.htm",
		controller:"adminpanelCtrl"
    })
	
	

    .state("home.addArticle", {
		url:"addArticle",
        templateUrl : "template/addarticle.html",
		controller : "addarticleCtrl"
    })
    
    .state("home.updateArticle", {
		url:"updateArticle",
        templateUrl : "template/updatearticle.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.addAudio", {
		url:"addAudio",
        templateUrl : "template/addaudio.html",
		controller: "addaudioCtrl" 
    })
    
    .state("home.updateAudio", {
		url:"updateAudio",
        templateUrl : "template/updateaudio.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.addBook", {
		url:"addBook",
        templateUrl : "template/addbook.html",
		controller: "addbookCtrl"
    })
    
    .state("home.updateBook", {
		url:"updateBook",
        templateUrl : "template/updatebook.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.addEvent", {
		url:"addEvent",
        templateUrl : "template/addevent.html",
		controller: "addeventCtrl"
    })
    
    .state("home.updateEvent", {
		url:"updateEvent",
        templateUrl : "template/updateevent.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.addSlide", {
		url:"addSlide",
        templateUrl : "template/addflashslide.html",
		controller: "addflashslideCtrl"
    })
    
    .state("home.addJob", {
		url:"addJob",
        templateUrl : "template/addjob.html",
		controller : "addjobCtrl"  
    })
    
    .state("home.updateJob", {
		url:"updateJob",
        templateUrl : "template/updatejob.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.addPersonality", {
		url:"addPersonality",
        templateUrl : "template/addpersonality.html",
		controller : "addpersonalityCtrl"
    })
    
    .state("home.updatePersonality", {
		url:"updatePersonality",
        templateUrl : "template/updatepersonality.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.subscribe", {
		url:"subscribe",
        templateUrl : "template/subscribe.html",
		controller:"subscriberCtrl"
    
    })
         
  

    .state("home.addVideo", {
		url:"addVideo",
        templateUrl : "template/addvideo.html",
		controller : "addvideoCtrl"
    })
    
    .state("home.updateVideo", {
		url:"updateVideo",
        templateUrl : "template/updatevideo.html",
		controller:function(){
            console.log("inside");
        }  
    })
    
    .state("home.addUser", {
		url:"addUser",
        templateUrl : "template/adduser.html",
		controller : "adduserCtrl"
    })

   $urlRouterProvider.otherwise("/mainHome"); 
});