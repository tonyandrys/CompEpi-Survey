// CompEpi Survey App-specific Javascript
// A global place for creating, registering, and retrieving AngularJS modules

// The first parameter, 'compEpiSurvey' is the name of this angular module example (also set in a <body> attribute in index.html)
// The second parameter is an array of dependencies. For now, this module one has one dependency, the 'ionic' package. More packages can be declared in the array to be used in the configuration below.
angular.module('compEpiSurvey', ['ionic'])

/* Providers (dependency injections) can only be performed in module config methods */
// By passing $stateProvider and $urlRouterProvider, we are requsting that these services be injected into the config function, which allows access to their functionality when configuring the module
.config(function($stateProvider, $urlRouterProvider) {
  
  // Defining routes using stateProvider
  $stateProvider
  
  // Abstract state holding the list of tabs
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Defining the root view of the Survey tab
  // First parameter is the name of this state and is used to refer to a state in a template
  .state('tabs.survey', {
    url: "/survey", 
    views: {
      'survey-tab' : {
        templateUrl: "templates/survey-home.html",
        controller: 'SurveyTabCtrl'
      }
    }
  }) 

  /* Defining Survey tab subviews */

  // Name/DOB
  .state('tabs.survey1', {
    url: "/survey/1",
    views: {
      'survey-tab': {
        templateUrl: "templates/survey-basic-info.html",
        controller: 'BasicInfoCtrl'
      }
    }
  })

  // Gender
  .state('tabs.survey2', {
    url: "/survey/2",
    views: {
      'survey-tab': {
        templateUrl: "templates/survey-gender.html",
        controller: 'GenderCtrl'
      }
    }
  })

  // Travel List
  .state('tabs.survey3', {
    url: "/survey/3",
    views: {
      'survey-tab': {
        templateUrl: "templates/survey-travel.html",
        controller: 'TravelCtrl'
      }
    }
  })

  // Free Response Comment
  .state('tabs.survey4', {
    url: "/survey/4",
    views: {
      'survey-tab': {
        templateUrl: "templates/survey-comment.html",
        controller: 'SubmissionTabCtrl'
      }
    }
  })

  // Submission Confirmation View
  .state('tabs.surveyconf', {
    url: "/survey/end",
    views: {
      'survey-tab': {
        templateUrl: "templates/survey-confirmation.html",
        controller: 'ConfirmationCtrl'
      }
    }
  })





  // Defining the root view of the Contact tab
  .state('tabs.contact', {
    url: "/contact",
    views: {
      'contact-tab' : {
        templateUrl: "templates/contact.html",
        controller: 'ContactTabCtrl'
      }
    }
  })

  // Fallback - if we can't match any of the above states, move to /tab/survey
  $urlRouterProvider.otherwise("/tab/survey");

})

/* Controller definitions */
// TODO: Move these to a separate file (controllers.js) when these controllers have actual functionality

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

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
