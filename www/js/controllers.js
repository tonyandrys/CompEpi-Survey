// CompEpiSurvey controller definitions

angular.module('compEpiSurvey.controllers', [])

.controller('SurveyTabCtrl', function($scope) {
  console.log('SurveyTabCtrl');
})

// Contact Data Controller
.controller('ContactTabCtrl', function($scope) {
  console.log('ContactTabCtrl');

  // Hardcode contact information from http://compepi.cs.uiowa.edu/index.php/Profiles/People
  
  // Faculty List
  $scope.facultyList = [{
    name: 'Alberto Segre',
    email: 'alberto-segre@uiowa.edu'
  }, {
    name: 'Sriram Pemmaraju',
    email: 'sriram-pemmaraju@uiowa.edu'
  }, {
    name: 'Ted Herman',
    email: 'ted-herman@uiowa.edu'
  }, {
    name: 'Phil Polgreen',
    email: 'philip-polgreen@uiowa.edu'
  }, {
    name: 'James Cremer',
    email: 'james-cremer@uiowa.edu'
  }];

  // PhD List
  $scope.phdList = [{
    name: 'Geoffrey Fairchild',
    email: 'geoffrey-fairchild@uiowa.edu'
  }, {
    name: 'Jason Fries',
    email: 'jason-fries@uiowa.edu'
  }, {
    name: 'Valerie Galluzzi',
    email: 'valerie-galluzzi@uiowa.edu'
  }, {
    name: 'Farley Lai',
    email: 'poyuan-lai@uiowa.edu'
  }, {
    name: 'Mauricio Monsalve', 
    email: 'mauricio-monsalve@uiowa.edu'
  }, {
    name: 'Patrick Rhomberg',
    email: 'patrick-rhomberg@uiowa.edu'
  }, {
    name: 'Jacob Simmering',
    email: 'jacob-simmering@uiowa.edu'
  }, {
    name: 'Sean Lucio Tolentino',
    email: 'sean-tolentino@uiowa.edu'
  }];

  // MCS Students
  $scope.mcsList = [{
    name: 'Yixen Chen',
    email: 'ychen120@uiowa.edu'
  }];

  // BS/BA Students
  $scope.undergradList = [{
    name: 'Tony Andrys',
    email: 'anthony-andrys@uiowa.edu'
  }, {
    name: 'Vasu Balakrishnan',
    email: 'vasu-balakrishnan@uiowa.edu'
  }, {
    name: 'Michael Lash',
    email: 'michael-lash@uiowa.edu'
  }, {
    name: 'Deepti Sharma',
    email: 'deepti-sharma@uiowa.edu'
  }, {
    name: 'Alexander Starr',
    email: 'alexander-starr@uiowa.edu'
  }, {
    name: 'Dylan Thiemann',
    email: 'dylan-thiemann@uiowa.edu'
  }];

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