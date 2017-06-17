var myApp=angular.module('myApp',['ngRoute','ngAnimate'])

.factory('data',function(){
	return [
		'skins',
		'gallary',
		'features'
	]
})
.controller('myCtrl',['$scope','data',function(s,d){
	s.data=d;
}])

.config(function($routeProvider){
	$routeProvider
	.when(
		'/home',
		{
			templateUrl:'temp/home.html'
	})
	.when(
		'/skins',
		{
			templateUrl:'temp/skins.html'
	})
	.when(
		'/features',
		{
			templateUrl:'temp/features.html'
	})
	.when(
		'/gallary',
		{
			templateUrl:'temp/gallary.html'
	})
	.otherwise({
		redirectTo:'/home'
	})
})