angular.module('PortfolioApp').
directive('sidenav', function() {
    return {
        replace: true,
        link: function(scope, elem, attr) {
            //
        },
        templateUrl: 'client/components/layout/sidenav/sidenav.tpl.html',
        controller: function($scope, $state){
            $scope.index = 1;
            $scope.changeView = function(index){
                $scope.index = index;
                switch(index) {
                    case 1:
                        $state.go('aboutMe');
                        break;
                    case 2:
                        $state.go('resume');
                        break;
                    case 3:
                        $state.go('contact');
                        break;
                    case 4:
                        $state.go('resources');
                        break;
                }
            };
        }
    };
});
