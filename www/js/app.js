// CompEpi Survey App-specific Javascript
// A global place for creating, registering, and retrieving AngularJS modules

// The first parameter, 'compEpiSurvey' is the name of this angular module example (also set in a <body> attribute in index.html)
// The second parameter is an array of dependencies. For now, this module has three dependencies: The 'ionic' package, compEpiSurvey.controllers, and compEpiSurvey.services.
// More packages can be declared in the array to be used in the configuration below.

angular.module('compEpiSurvey', ['ionic', 'compEpiSurvey.controllers', 'compEpiSurvey.services'])

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
