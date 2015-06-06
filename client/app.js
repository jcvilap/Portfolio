angular.module('PortfolioApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ui.router']).

config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green')
        .accentPalette('grey');

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
            templateUrl: "client/components/core/contact/contact.tpl.html"
        })
        .state('resources', {
            url: "/resurces",
            templateUrl: "client/components/core/resources/resources.tpl.html"
        });
    $urlRouterProvider.otherwise("/aboutMe");

}).

controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);
