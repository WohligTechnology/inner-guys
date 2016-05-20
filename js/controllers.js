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
    img: "img/client/c1.jpg"

  }, {
    img: "img/client/c2.png"

  }, {
    img: "img/client/c3.png"

  }, {
    img: "img/client/c4.png"

  }, {
    img: "img/client/c5.png"

  }, {
    img: "img/client/c6.png"

  }, {
    img: "img/client/c7.png"

  }, {
    img: "img/client/c8.png"

  }, {
    img: "img/client/c9.png"

  }, {
    img: "img/client/c10.png"
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
