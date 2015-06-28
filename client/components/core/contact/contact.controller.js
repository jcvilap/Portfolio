angular.module('PortfolioApp').
controller('ContactCtrl', function($scope, $resource, $mdDialog, $interval) {
    var Contact = $resource('/mail', {});

    function initContact(form){
        $scope.contact = {
            name: '',
            email: '',
            message: ''
        };

        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
    }

    $scope.updateEv = function(ev){
        $scope.ev = ev;
    };

    $scope.sendEmail = function(form){
        Contact.save({}, $scope.contact);
        $scope.determinateValue = 0;

        $interval(function() {
            $scope.determinateValue += 10;
            if($scope.determinateValue == 90){

                $scope.alert = '';
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.body))
                        .title('Message Sent')
                        .content('Thank you for taking the time and contacting me. I\'ll get back to you ASAP!')
                        .ariaLabel('Message Sent')
                        .ok('Got it!')
                        .targetEvent($scope.ev)
                );
                initContact(form);
            }

        }, 100, 0, false);
    };




    initContact();
});