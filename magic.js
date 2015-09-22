// magic.js

    // create the module and name it habibkApp
        // also include ngRoute for all our routing needs
	var habibkApp = angular.module('habibkApp', ['ngRoute']);

	habibkApp.config(function($routeProvider) {
		$routeProvider

            // route for the about page
            .when('/', {
                templateUrl : 'partials/about.html',
                controller  : 'aboutController'
            })

			// route for the about page
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller  : 'aboutController'
            })

            // route for the interests page
            .when('/interests', {
                templateUrl: 'partials/about.html',
                controller: 'interestsController'
            })

            // route for the blog page
            .when('/blog', {
                templateUrl: 'partials/about.html',
                controller: 'blogController'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl: 'partials/about.html',
                controller: 'contactController'
            })
            .otherwise({redirectTo:'/'});
	});

	habibkApp.controller('aboutController', function($scope) {
        $scope.page='about';
        $scope.header = 'About Me';
        $scope.overview = 'I\'m a software engineer at GE :)';
        $scope.details = 'I have many interests including web development, artificial intelligence, and working out! Also, my favorite color is green :P';
	    $scope.detailsList = {
            'Web Development': 'https://google.com',
            'Artificial Intelligence': 'https://google.com',
            'Working Out': 'https://google.com'
        }
    });
    habibkApp.controller('interestsController', function($scope) {
        $scope.page='interests';
        $scope.header = 'Interests and Hobbies';
        $scope.overview = 'I have interests in various fields, hobbies, and travel destinations.';
        $scope.details = 'I am interested in Artificial Intelligence, Database Systems, and Mobile Applications (both web and native). I like to play video games - on the Xbox, PlayStation, or PC. I like to travel to Europe, Asia, and some parts of the U.S.';
        $scope.detailsList = {
            'Web Development': 'https://google.com',
            'Artificial Intelligence': 'https://google.com',
            'Working Out': 'https://google.com'
        }
    });
    habibkApp.controller('blogController', function($scope) {
        $scope.page='blog';
        $scope.header = 'Habib\'s Blog!';
        $scope.overview = 'Welcome to my blog! Hope you find it useful :)';
        $scope.details = 'I will be adding a link to this soon!';
        $scope.detailsList = {
            'Web Development': 'https://google.com',
            'Artificial Intelligence': 'https://google.com',
            'Working Out': 'https://google.com'
        }
    });
	habibkApp.controller('contactController', function($scope) {
		$scope.page='contact';
        $scope.header = 'Contact Me';
        $scope.overview = 'Let\'s get in touch!';
        $scope.details = 'Ask me anything. I would love to hear from you!';
        $scope.detailsList = {
            'Web Development': 'https://google.com',
            'Artificial Intelligence': 'https://google.com',
            'Working Out': 'https://google.com'
        }
	})

