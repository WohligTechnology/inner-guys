angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [{
        image: 'img/slides/slide1.jpg',
        title: 'Brigding',
        text: 'lorem',
        pagelink: 'about-us',
        pagename: 'About Us'
    }, {
        image: 'img/slides/slide2.jpg',
        title: '',
        text: '',
        pagelink: '',
        pagename: ''
    }, {
        image: 'img/slides/slide3.jpg',
        title: '',
        text: '',
        pagelink: '',
        pagename: ''
    }];

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
    $scope.menutitle = NavigationService.makeactive("SERVICES");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AffiliatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file



    $scope.template = TemplateService.changecontent("affiliates");
    $scope.menutitle = NavigationService.makeactive("AFFILIATES");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ClientsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file



    $scope.template = TemplateService.changecontent("clients");
    $scope.menutitle = NavigationService.makeactive("CLIENTS");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('DownloadsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file



    $scope.template = TemplateService.changecontent("downloads");
    $scope.menutitle = NavigationService.makeactive("DOWNLOADS");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file



    $scope.template = TemplateService.changecontent("contact-us");
    $scope.menutitle = NavigationService.makeactive("CONTACT US");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
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
