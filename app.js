angular.module('resumeApp', [])
    .controller('ResumeController', function ($scope) {
        $scope.formData = {};
        $scope.resumeGenerated = false;

        $scope.generateResume = function () {
            $scope.resumeGenerated = true;
        };
    });
