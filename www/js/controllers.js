/* compEpiSurvey.controllers */
// Contains the controller definitions for CompEpiSurvey.
//
// A proper MVC based implementation of an Angular module dictates that controllers should primarily be responsible for binding model data to views. 
//

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
.controller('BasicInfoCtrl', function($scope, ResponseService) {

  console.log('BasicInfoCtrl initialized');

  $scope.formData = {};

  // Store user input (retrieve if necessary)
  $scope.formData.firstName = ResponseService.getFirstName();
  $scope.formData.lastName = ResponseService.getLastName();
  $scope.formData.dateOfBirth = ResponseService.getDateOfBirth();

  // On transition to next screen, store the responses in localStorage
  $scope.saveData = function() {
    ResponseService.setFirstName($scope.formData.firstName);
    ResponseService.setLastName($scope.formData.lastName);
    ResponseService.setDateOfBirth($scope.formData.dateOfBirth);
    console.log("Wrote firstname: " + $scope.formData.firstName + ", lastname: " + $scope.formData.lastName + ", dateOfBirth: " + $scope.formData.dateOfBirth);
  }

})

// Gender Question Controller
.controller('GenderCtrl', function($scope, ResponseService) {

  // Store response as a string
  $scope.genderResponse = "";

  // Store results onClick
  $scope.saveData = function() {
    ResponseService.setGender($scope.genderResponse);
  }

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

// Travel Question Controller
.controller('D3Ctrl', function($scope, $rootScope) {

  console.log("D3Ctrl");

  $scope.formData = {};

  // Store data input as a string
  $scope.formData.input = "";

})

// Submission page controller
.controller('SubmissionTabCtrl', function($scope, $ionicPopup, $timeout, $state, ResponseService) {

  $scope.formData = {};

  // Store user input (retrieve if necessary)
  $scope.formData.comment = ResponseService.getComment();

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

        // Write comment to localStorage
        ResponseService.setComment($scope.formData.comment);
        console.log("Wrote comment: " + $scope.formData.comment); 
        
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
.controller('ConfirmationCtrl', function($scope, ResponseService) {

  console.log('ConfirmationCtrl');

  // Pull data down from rootScope and bind it to this controller's scope to be pulled into the view
  $scope.firstName = ResponseService.getFirstName();
  $scope.lastName = ResponseService.getLastName();
  $scope.dateOfBirth = ResponseService.getDateOfBirth();
  $scope.comment = ResponseService.getComment();


})






