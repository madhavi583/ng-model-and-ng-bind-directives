var app=angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        //template:'Welcome User!',
        templateUrl:'/angularanother/login.html'
    })
    //  .when('/login',{
    //     template:'Welcome User!',
    //     templateUrl:'login.html'
    // })
 .when('/dashboard',{
     resolve:{
         "check": function($location,$rootScope){
             if(!$rootScope.loggedIn)
             {
$location.path('/');
             }
//              else{
// templateUrl:'/angularanother/dashboard.html'
//              }
         }
     },
        templateUrl:'/angularanother/dashboard.html'
    })
    .otherwise({
        redirectTo:'/'
    })
});
app.controller('loginCtrl',function($scope,$location,$rootScope){
$scope.submit=function(){
    //$rootScope.thisName="madhavi pathapati";
    var uname=$scope.username;

 var password=$scope.password;
 if($scope.username == 'admin' && $scope.password=='admin'){
    $rootScope.loggedIn=true;
     $location.path('/dashboard');
    //window.location.hash

 }
 else{
     alert('user anme and password wrong');
 }
};
});