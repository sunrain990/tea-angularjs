/**
 * Created by kevin on 16/1/26.
 */
/*var myApp = angular.module('myApp',[]);
 myApp.factory('Data',function(){
 return {message:"I'm data from a service"}
 })
 myApp.filter('reverse',function(){
 return function(text){
 return text.split("").reverse().join("");
 }
 })
 function FirstCtrl($scope,Data) {
 $scope.data = Data;
 }
 function SecondCtrl($scope,Data) {
 $scope.data = Data;
 $scope.reversedMessage = function () {
 return $scope.data.message.split("").reverse().join("");
 }
 }
 //每个页面只接受一个APP，js加载必须在angularjs后面
 var myApp1 = angular.module('myApp1',[]);
 myApp1.factory('Avengers',function(){
 var Avengers = {};
 Avengers.cast = [
 {
 name: "Robert Downey Jr.",
 character: "Tony Stark / Iron Man"
 },
 {
 name: "Chris Evans",
 character: "Steve Rogers / Captain America}"
 },
 {
 name: "Mark Ruffalo",
 character: "Bruce Banner / The Hulk}"
 },
 {
 name: "Chris Hemsworth",
 character: "Thor"
 },
 {
 name: "Scarlett Johansson",
 character: "Natasha Romanoff / Black Widow"
 },
 {
 name: "Jeremy Renner",
 character: "Clint Barton / Hawkeye"
 },
 {
 name: "Tom Hiddleston",
 character: "Loki"
 },
 {
 name: "Clark Gregg",
 character: "Agent Phil Coulson"
 },
 {
 name: "Cobie Smulders",
 character: "Agent Maria Hill"
 }
 ];
 return Avengers;
 })

 function AvengersCtrl($scope,Avengers){
 $scope.avengers = Avengers;
 }

 var app2 = angular.module("superhero",[])
 app2.directive("superman",function(){
 return {
 //    restrict: "E",
 //    template: "<div>Here I am to save the day</div>"
 //    <superman></superman>
 restrict: "A",
 link: function(){
 alert("<div superman>")
 }
 //  restrict: "C",
 //  <div class="superman">
 //  restrict: "M",
 //  <!--directive:superman -->

 }
 })

 app2.directive("flash",function(){
 return {
 restrict: "A",
 link: function(){
 alert("<div flash>")
 }
 }
 })
 //bind mouseenter to console
 //options: mouseleave
 app2.directive("enter",function(){
 return function(scope,element){
 element.bind("mouseenter",function(){
 console.log("I'm inside of you!");
 //调用：enter=panel
 //  element.addClass("panel");
 //  element.removeClass("panel");
 //  return function(){
 //    element.bind("mouseleave")
 //  }
 })
 }
 })

 var app = angular.module('twitterApp',[])

 app.controller("AppCtrl",function($scope){
 $scope.loadMoreTweets = function () {
 alert("Loading tweets!");
 }
 $scope.deleteTweets = function(){
 alert("deleting tweets")
 }
 })


 app.directive("enter",function(){
 return function(scope,element,attrs){
 element.bind("mouseenter",function(){
 //      scope.loadMoreTweets();
 scope.$apply(attrs.enter);
 //    loadMoreTweets()
 })
 }
 })

 var app = angular.module('superApp',[])
 app.directive("superhero",function(){
 return {
 restrict:"E",
 scope:{},
 controller:function($scope){
 $scope.abilities = []
 this.addStrength = function(){
 $scope.abilities.push("strength")
 }
 this.addSpeed = function(){
 $scope.abilities.push("speed")
 }
 this.addFlight = function(){
 $scope.abilities.push("flight")
 }
 },
 link: function(scope,element){
 element.addClass("button");
 element.bind("mouseenter",function(){
 console.log(scope.abilities);
 })
 }
 }
 });

 app.directive("strength",function(){
 return {
 require:"superhero",
 link:function(scope,element,attrs,superheroCtrl){
 superheroCtrl.addStrength();
 }
 }
 })

 app.directive("speed",function(){
 return {
 require:"superhero",
 link: function(scope,element,attrs,superheroCtrl){
 superheroCtrl.addSpeed();
 }
 }
 })

 app.directive("flight",function(){
 return {
 require:"superhero",
 link:function(scope,element,attrs,superheroCtrl){
 superheroCtrl.addFlight();
 }
 }
 })

 var app = angular.module('choreApp',[]);

 app.controller("ChoreCtrl",function($scope){
 $scope.logChore = function(chore){
 alert(chore + " is done!");
 }
 })

 app.directive("kid",function(){
 return {
 restrict: "E",
 scope:{
 done:"&"
 },
 template: '<input type="text" ng-model="chore">' +
 ' {{chore}}' +
 ' <div class="button" ng-click="done()">I\'m done!</div>'
 // done({chore:chore})
 // 前台:logChore(chore)
 }
 })


 var app = angular.module("drinkApp",[]);

 app.controller("AppCtrl",function($scope){
 $scope.ctrlFlavor = "blackberry"
 })

 app.directive("drink",function(){
 return {
 scope:{
 flavor:"@"
 //= 匹配 "ctrlFlavor"
 },
 //    可替代link:
 template: '<div>{{flavor}}</div>',
 //    link: function(scope,element,attrs){
 //      scope.flavor = attrs.flavor;
 //    }
 }
 })


 var app = angular.module("phoneApp",[]);

 app.controller("AppCtrl",function($scope){
 $scope.callHome = function(message){
 alert(message)
 }
 })

 app.directive("phone",function(){
 return {
 scope:{
 dial:"&"
 },
 template:'<input type="text" ng-model="value">' +
 '<div class="button" ng-click="dial({message:value})">Call home!</div>'
 }
 })


 var app = angular.module("phoneApp",[]);

 app.controller("AppCtrl",function($scope){
 $scope.leaveVoicemail = function (number,message){
 alert("Number: " + number + " said: " + message)
 }
 })

 app.directive("phone",function(){
 return {
 restrict:"E",
 scope:{
 number:"@",
 network:"=",
 makeCall:"&"
 },
 template:'<div class="panel">Number: {{number}} Network:<select ng-model="network" ng-options="net for net in networks"></select>' +
 '<input type="text" ng-model="value">' +
 '<div class="button" ng-click="makeCall({number:number, message:value})">Call home!</div></div>',
 link: function(scope){
 scope.networks = ["Verizon","AT&T","Sprint"];
 scope.network = scope.networks[0]
 }
 }
 })


 var app = angular.module("phoneApp",[]);

 app.controller("AppCtrl",function($scope){

 });

 app.directive("panel",function(){
 return{
 restrict:"E",
 transclude:true,
 template:'<div class="panel" ng-transclude>This is a panel component</div>'
 }
 })


 var app = angular.module("phoneApp",[])

 var phoneAppStuff = {}

 phoneAppStuff.controllers = {}

 controllers.AppCtrl = function($scope){
 this.sayHi = function(){
 alert("hi")
 }
 return $scope.AppCtrl = this;
 }

 phoneAppStuff.directives = {}

 directives.panel = function(){
 return {
 restrict:"E"
 }
 }

 app.directive(phoneAppStuff.directives);
 app.controller(phoneAppStuff.controllers);

 //app.controller("AppCtrl",function($scope){
 //  $scope.sayHi = function(){
 //    alert("hi");
 //this.sayHi = function(){
 //  alert("hi")
 //}
 //return $scope.AppCtrl = this;
 //ng-click="AppCtrl.sayHi()"
 //  }
 //})


 var app = angular.module("app",[])

 app.directive("zippy",function(){
 return {
 restrict:"E",
 transclude:true,
 scope:{
 title:"@"
 },
 template:'<div><h3 ng-click="toggleContent()">{{title}}</h3>' +
 '<div ng-show="isContentVisible" ng-transclude></div></div>',
 link:function(scope){
 scope.isContentVisible = false;
 scope.toggleContent = function(){
 scope.isContentVisible = !scope.isContentVisible;
 }
 }
 }
 })


 var app = angular.module("app",[])

 app.directive("dumbPassword",function(){
 var validElement = angular.element("<div>{{model.input}}</div>");

 //this.link = function(scope){
 //  scope.$watch("model.input",function(value){
 //    if(value === "password"){
 //      validElement.toggleClass("alert-box alert")
 //    }
 //  })
 //}

 return {
 restrict:"E",
 //remove the dumb-password element
 replace:true,
 template:'<div>\n<input type="text" ng-model="model.input">\n  \n </div>',
 compile:function(tElem){
 tElem.append(validElement);
 return function(scope){
 scope.$watch("model.input",function(value){
 if(value==="password"){
 validElement.toggleClass("alert-box alert")
 }
 })
 }
 //    return link;
 }
 //    link:function(scope,element){
 //      scope.$watch("model.input",function(value){
 //        if(value === "password"){
 //          element.children(1).toggleClass("alert-box alert")
 //        }
 //      })
 //    }
 }
 })


 var app = angular.module("app",[]);

 app.controller("MyCtrl",function($scope,$http,$parse){
 console.log($http);
 });

 //app.controller("MyCtrl",["$scope","$http",function(a,b){
 //  console.log(a);
 //}]);
 //
 //a is a reference of scope
 //and b is http

 app.directive("myDirective",function(){
 return {
 //  create a new scope
 //  scope:{},
 link:function(scope){
 console.log(scope);
 }
 }
 });


 var app = angular.module("app",[])

 //app.run(funtcion($templateCache){
 //  $templateCache.put("zippy.html",'...these just zippy.html contents ...')
 //})


 //templateCache is added to console log
 app.directive("zippy",function($templateCache){
 console.log($templateCache.get("zippy.html"))

 return {
 restrict:"E",
 transclude:true,
 scope:{
 title:"@"
 },
 templateUrl:'zippy.html',
 // can be
 // template:$templateCache.get("zippy.html"),
 link:function(scope){
 scope.isContentVisible=false;
 scope.toggleContent=function(){
 scope.isContentVisible=!scope.isContentVisible;
 }
 }
 }
 })



 var app = angular.module("app",[]);

 app.config(function($routeProvider){
 $routeProvider
 //    .when('/:message',
 //    .when('/map/:country/:state/:city',
 .when ('/',
 {
 templateUrl:"app.html",
 controller:"AppCtrl"
 //file:///root/workspace/angularjs/index.html#/map/usa/bitch/fuck
 })
 .when('/pizza/:crust/:toppings',{
 redirectTo:function(routeParams,path,search){
 console.log(routeParams)
 console.log(path)
 console.log(search)
 console.log(routeParams.crust + "crust")
 return "/" + routeParams.crust
 }
 })
 .when('/deep',{
 template:'Deep dish'
 })
 .otherwise({
 redirectTo:"/"
 })
 //    .when('/pizza',{
 //      template : "Yum!!"
 //    })
 //    .otherwise({
 //      template: "This doesn't exist!"
 //  //  redirectTo:"/" 其他都调转到'/'
 //    })
 });

 app.controller("AppCtrl",function($scope){
 // also if you want to preinclude a route
 // use:
 //  function($scope,$route){
 //    $route.routes["/"]={
 //      templateUrl:"app.html",
 //      controller:"AppCtrl"
 //    }
 //  }
 //
 $scope.model={
 //    message:$routeParams.message
 //      message:"Address: "+
 //        $routeParams.country + ", " +
 //        $routeParams.state + ", " +
 //        $routeParams.city + ", "
 message:"This is my app!!!"
 }
 });


 var app = angular.module("app",[]);

 app.config(function($routeProvider){
 $routeProvider
 .when('/',
 {
 templateUrl:"app.html",
 controller:"AppCtrl"
 })
 });

 app.controller("AppCtrl",function($scope,$q){
 var defer = $q.defer();
 defer.promise
 .then(function(weapon){
 alert("You can have my " + weapon)
 return "bow"
 })
 .then(function(weapon){
 alert("And my " + weapon)
 return "axe"
 })
 .then(function(weapon){
 alert("And my " + weapon)
 });

 defer.resolve("sword");
 $scope.model = {
 message:"This is my app!!!"
 }
 });


 var app = angular.module("app",[]);

 app.config(function($routeProvider){
 $routeProvider
 .when('/',
 {
 templateUrl:"app.html",
 // view/app.html
 controller:"AppCtrl",
 resolve:{
 app:function($q,$timeout){
 var defer = $q.defer();
 $timeout(function(){
 defer.resolve();
 },2000);
 return defer.promise;
 }
 }
 })
 });

 app.controller("AppCtrl",function($scope){
 $scope.model={
 message:"I'm a great app!"
 }
 });


 var app=angular.module("app",[]);
 app.config(function($routeProvider){
 $routeProvider
 .when('/',
 {
 templateUrl:"app.html",
 controller:"AppCtrl",
 resolve:{
 loadData:appCtrl.loadData,
 prepData:appCtrl.prepData
 }
 })
 });

 var appCtrl = app.controller("AppCtrl",function($scope){
 $scope.model = {
 message:"I'm a great app!"
 }
 });

 appCtrl.loadData = function($q,$timeout){
 var defer = $q.defer();
 $timeout(function(){
 defer.resolve();
 },2000);
 return defer.promise;
 }

 appCtrl.prepData = function($q,$timeout){
 var defer = $q.defer();
 $timeout(function(){
 defer.resolve();
 },2000);
 return defer.promise;
 }
 */

//if error
var app = angular.module("app",[]);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl:"app.html",
            controller:"ViewCtrl",
            resolve:{
                loadData:viewCtrl.loadData
            }
        })
});

app.controller("AppCtrl",function($rootScope){
    $rootScope.$on("$routeChangeError",function(event,current,previous,rejection){
        console.log(rejection);
    })
});

var viewCtrl = app.controller("ViewCtrl",function($scope,$route){
    console.log($route);
    $scope.model={
        message:"I'm a great app!"
    }
});

viewCtrl.loadData = function ($q,$timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.reject("loadData");
    },2000);
    return defer.promise;
}
