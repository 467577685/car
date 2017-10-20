/**
 * Created by 123 on 2017/10/19.
 */
var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("home",{
            url:"/home",
            templateUrl:"App/View/home.html",
            controller:"homeController"
        })
        .state("banking",{
            url:"/banking",
            templateUrl:"App/View/banking.html"
        });
    $urlRouterProvider.otherwise("/home");
});