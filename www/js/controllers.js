/* compEpiSurvey.controllers */
// Contains the controller definitions for CompEpiSurvey.

angular.module('compEpiSurvey.controllers', [])

.controller('SurveyTabCtrl', function($scope) {
  console.log('SurveyTabCtrl');
})

// Contact Data Controller
// Inject the contactListModel service defined in compEpiSurvey.services to access the staff data
.controller('ContactTabCtrl', function($scope, contactListModel) {
  console.log('ContactTabCtrl');

  // Get the full set of contacts
  contactSet = contactListModel.getFullStaffList();

  // Bind the four staff list categories from the contactListModel to the view so we can fill the table.
  $scope.facultyList = contactSet.faculty;
  $scope.phdList = contactSet.phd;
  $scope.mcsList = contactSet.mcs;
  $scope.undergradList = contactSet.undergrad;

})

// Basic Info Question Controller
.controller('BasicInfoCtrl', function($scope, $rootScope) {

  // Store user input 
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.dateOfBirth = "";

  // On data changes, update the model in the rootScope.
  // FIXME: Dirty. Does this have to be three calls? There has to be a better way to do this.
  $scope.$watch("firstName", function(newValue, oldValue) {
    $rootScope.firstName = newValue;
  });

  $scope.$watch("lastName", function(newValue, oldValue) {
    $rootScope.lastName = newValue;
  });

  $scope.$watch("dateOfBirth", function(newValue, oldValue) {
    $rootScope.dateOfBirth = newValue;
  });

})

// Gender Question Controller
.controller('GenderCtrl', function($scope, $rootScope) {

  // Store response as a string
  $scope.genderResponse = "";

  // Store changes in rootScope
  $scope.$watch("genderResponse", function(newValue, oldValue) {
    $rootScope.genderResponse = newValue;
  });

})

// Travel Question Controller
.controller('TravelCtrl', function($scope, $rootScope) {

  // Store response as a string
  $scope.travelResponse = "";

  // Store changes in rootScope
  $scope.$watch("travelResponse", function(newValue, oldValue) {
    $rootScope.travelResponse = newValue;
  });

})

// Submission page controller
.controller('SubmissionTabCtrl', function($scope, $ionicPopup, $timeout, $state) {

  // Triggered on the Submit button click
  $scope.showConfirm = function() {

    var confirmPopup = $ionicPopup.confirm({
      title: 'Are you sure?',
      template: 'Please confirm your answers are correct before submitting.'
    });

    // React to selection
    confirmPopup.then(function(res) {
      if(res) {
        console.log('Answers are correct.');
        
        // Move to confirmation page.
        $state.go('tabs.surveyconf');

      } else {
        console.log('Answers are NOT correct.');
        // Do nothing until they confirm in the popup
      }

    });
  };

})

// Confirmation page controller
.controller('ConfirmationCtrl', function($scope, $rootScope) {

  console.log('ConfirmationCtrl');

  // Pull data down from rootScope and bind it to this controller's scope to be pulled into the view
  $scope.firstName = $rootScope.firstName;
  $scope.lastName = $rootScope.lastName;
  $scope.dateOfBirth = $rootScope.dateOfBirth;
  $scope.genderResponse = $rootScope.genderResponse;
  $scope.dateOfBirth = $rootScope.dateOfBirth;

});