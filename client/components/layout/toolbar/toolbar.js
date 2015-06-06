angular.module('PortfolioApp').
directive('toolbar', function() {
    return {
        replace: true,
        link: function(scope, elem, attr) {
            //
        },
        templateUrl: 'client/components/layout/toolbar/toolbar.tpl.html'
    };
});
