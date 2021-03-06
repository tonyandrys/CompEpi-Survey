/* compEpiSurvey.services */
// Contains the service definitions for CompEpiSurvey. 

// DEPENDENCIES:
// 1) localStorageModule - An AngularJS module that gives you access to the browsers local storage with cookie fallback (HTML5 based)

angular.module('compEpiSurvey.services', ['LocalStorageModule'])

// Response Services provides an access point for controllers to read/write stored data using localStorageModule
.factory('ResponseService', function(localStorageService) {

  // Data variables
  var firstName = "";
  var lastName = "";
  var dateOfBirth = "";
  var gender = "";
  var travel = [];
  var comment = "";

  // Access methods
  return {
    
    getFirstName: function () {
      return firstName;                   
    },
  
    setFirstName: function (newName) {
      firstName = newName;
    },

    getLastName: function(newName) {
      return lastName;
    },

    setLastName: function(newName) {
      lastName = newName;
    },

    getDateOfBirth: function() {
      return dateOfBirth;
    },

    setDateOfBirth: function(newDob) {
      dateOfBirth = newDob;
    },

    getGender: function() {
      return gender;
    },

    setGender: function(newGender) {
      gender = newGender;
    },

    getTravelLocations: function() {
      return travel;
    },

    addTravelLocation: function(newLocation) {
      travel[travel.length] = newLocation;
    },

    getComment: function() {
      return comment;
    },

    setComment: function(newComment) {
      comment = newComment;
    },

  }

})










// Survey Response Data Model/API (uses prototype)
/*.service('ResponseService', function() {

	// Properties
	this.firstName = "undefined";
	this.lastName = "undefined";
	this.dateOfBirth = "00/00/0000";
	this.gender = "undefined";
	this.travel = [];
	this.comment = "undefined";

	// Methods
	this.setFirstName = function(newFirstName) {
		this.firstName = newFirstName;
	};

	this.setLastName = function(newLastName) {
		this.lastName = newLastName;
	};

	this.setDateOfBirth = function(newDateOfBirth) {
		this.dateOfBirth = newDateOfBirth;
	};

	this.setGender = function(newGender) {
		this.setGender = newGender;
	};

	this.addTravelLocation = function(newTravelLocation) {
		this.travel.push(newTravelLocation);
	};

	this.setComment = function(newComment) {
		this.comment = newComment;
	}

	this.toString = function() {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			dateOfBirth: this.dateOfBirth,
			gender: this.gender,
			travel: this.travel,
			comment: this.comment
		}

	}


})*/


// Provides the data for the table in the Contact tab
// the .factory() method registers this service with angular, and the object function() returns represents the service.
.factory('contactListModel', function() {

	// Model Definition - CompEpi staff name/emails in four categories

	// Faculty List
	facultyList = [{
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
  phdList = [{
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
  mcsList = [{
    name: 'Yixen Chen',
    email: 'ychen120@uiowa.edu'
  }];

  // BS/BA Students
  undergradList = [{
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

  // API definition - use to access the data from this service
	return {
		getFullStaffList: function() {
			console.log('ContactListService: Returning full staff list');
			return {
				faculty: facultyList,
				phd: phdList,
				mcs: mcsList,
				undergrad: undergradList
			}
		}, 
		getFacultyList: function() {
			console.log('ContactListService: Returning Faculty List');
			return facultyList;
		},
		getPhdList: function() {
			console.log('ContactListService: Returning PhD List');
			return phdList;
		},
		getMcsList: function() {
			console.log('ContactListService: Returning MCS List');
			return mcsList;
		},
		getUndergradList: function() {
			console.log('ContactListService: Returning Undergrad List');
			return undergradList;
		}

	};

});