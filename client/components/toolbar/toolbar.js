angular.module('PortfolioApp').
directive('toolbar', function() {
    return {
        replace: true,
        link: function(scope, elem, attr) {
            //
        },
        templateUrl: 'client/components/toolbar/toolbar.tpl.html'
    };
});
