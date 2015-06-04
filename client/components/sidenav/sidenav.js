angular.module('PortfolioApp').
directive('sidenav', function() {
    return {
        replace: true,
        link: function(scope, elem, attr) {
            //
        },
        templateUrl: 'client/components/sidenav/sidenav.tpl.html'
    };
});
