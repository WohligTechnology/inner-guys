angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [{
    image: 'img/slides/slide1.jpg',
    title: 'Brigding the gap. Positively',
    text: 'Innergize solutions private limited is a statergy and management consultancy firm that provides a broad spectrum of services across diverse clientele that ranges from private corporations to financial institutions and even  high-net-worthy individuals.',
    pagelink: 'about-us',
    pagename: 'About Us'
  }, {
    image: 'img/slides/slide1.jpg',
    title: 'Brigding the gap. Positively',
    text: 'Innergize solutions private limited is a statergy and management consultancy firm that provides a broad spectrum of services across diverse clientele that ranges from private corporations to financial institutions and even  high-net-worthy individuals.',
    pagelink: 'about-us',
    pagename: 'About Us'
  }, {
    image: 'img/slides/slide1.jpg',
    title: 'Brigding the gap. Positively',
    text: 'Innergize solutions private limited is a statergy and management consultancy firm that provides a broad spectrum of services across diverse clientele that ranges from private corporations to financial institutions and even  high-net-worthy individuals.',
    pagelink: 'about-us',
    pagename: 'About Us'
  }];

  angular.element(document).ready(function() {
    $scope.autoHeight = $(document).height() - 120;
  });
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("about-us");
  $scope.menutitle = NavigationService.makeactive("About Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ServicesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("services");
  $scope.menutitle = NavigationService.makeactive("Services");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AffiliatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("affiliates");
  $scope.menutitle = NavigationService.makeactive("Affiliates");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ClientsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("clients");
  $scope.menutitle = NavigationService.makeactive("Clients");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.client = [{
    img: "img/clients/c1.jpg"

  }, {
    img: "img/clients/c2.jpg"

  }, {
    img: "img/clients/c3.jpg"

  }, {
    img: "img/clients/c4.jpg"

  }, {
    img: "img/clients/c5.jpg"

  }, {
    img: "img/clients/c6.jpg"

  }, {
    img: "img/clients/c7.jpg"

  }, {
    img: "img/clients/c8.jpg"

  }];
})

.controller('DownloadsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file



  $scope.template = TemplateService.changecontent("downloads");
  $scope.menutitle = NavigationService.makeactive("Downloads");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("contact-us");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("careers");
  $scope.menutitle = NavigationService.makeactive("Careers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $scope.showBar = "";
  $scope.showMenu = "menu-in";
  $scope.getMenu = function() {
    if ($scope.showMenu == "menu-out") {
      $scope.showMenu = "menu-in";
      $scope.showBar = "";
    } else {
      $scope.showMenu = "menu-out";
      $scope.showBar = "cross-bar";
    }
  };
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
