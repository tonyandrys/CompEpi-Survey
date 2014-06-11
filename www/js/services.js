/* compEpiSurvey.services */
// Contains the service definitions for CompEpiSurvey. 

angular.module('compEpiSurvey.services', [])

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

  // Public API definition - Use to accessing the data from this service
	return {
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