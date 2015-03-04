var app = angular.module('app', ['ngAnimate', 'ui.router', 'dndLists'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'App/Views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'App/Views/about.html'
            })
});