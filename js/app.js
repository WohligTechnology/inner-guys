// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })

  .state('about-us', {
    url: "/about-us",
    templateUrl: "views/template.html",
    controller: 'AboutCtrl'
  })

  .state('services', {
    url: "/services",
    templateUrl: "views/template.html",
    controller: 'ServicesCtrl'
  })

  .state('affiliates', {
    url: "/affiliates",
    templateUrl: "views/template.html",
    controller: 'AffiliatesCtrl'
  })

  .state('careers', {
    url: "/careers",
    templateUrl: "views/template.html",
    controller: 'CareersCtrl'
  })

  .state('clients', {
    url: "/clients",
    templateUrl: "views/template.html",
    controller: 'ClientsCtrl'
  })


  .state('downloads', {
    url: "/downloads",
    templateUrl: "views/template.html",
    controller: 'DownloadsCtrl'
  })

  .state('contact-us', {
    url: "/contact-us",
    templateUrl: "views/template.html",
    controller: 'ContactCtrl'
  });


  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});


firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var newheight= windowHeight- 250;
      var addHeight = function() {
        $element.css("min-height", newheight);
      };
      addHeight();
    }
  };
});
