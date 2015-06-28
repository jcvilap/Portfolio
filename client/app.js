angular.module('PortfolioApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial', 'ui.router']).

config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green')
        .accentPalette('grey');

    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('green')
        .dark();

    $stateProvider
        .state('aboutMe', {
            url: "/aboutMe",
            templateUrl: "client/components/core/aboutMe/aboutMe.tpl.html"
        })
        .state('resume', {
            url: "/resume",
            templateUrl: "client/components/core/resume/resume.tpl.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "client/components/core/contact/contact.tpl.html",
            controller: 'ContactCtrl'
        })
        .state('resources', {
            url: "/resources",
            templateUrl: "client/components/core/resources/resources.tpl.html"
        });
    $urlRouterProvider.otherwise("/aboutMe");

}).

controller('AppCtrl', ['$scope', '$rootScope', '$mdSidenav', function($scope, $rootScope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

        if(toState.name === 'aboutMe'){
            $scope.toolbarMessage = 'Welcome!';
            $scope.index = 1;
        }
        else if(toState.name === 'resume'){
            $scope.toolbarMessage = 'I\'ve some experience in the field...' ;
            $scope.index = 2;
        }
        else if(toState.name === 'contact'){
            $scope.toolbarMessage = 'Let\'s get in touch!';
            $scope.index = 3;
        }
        else if(toState.name === 'resources'){
            $scope.toolbarMessage = '[Recommended Articles]';
            $scope.index = 4;
        }
    });

}]);
