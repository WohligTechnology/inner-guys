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
  $scope.oneAtATime = true;
  $scope.services = [{
    title: "STRATEGIC, FINANCIAL AND BUSINESS CONSULTING",
    content: "<p>A holistic approach to diverse business needs in a dynamic economic climate. We review and optimize your business strategy, not just from a financial point of view but also from an overall business, legal and a long-term growth perspective.</p><ul class='dot-blue list-unstyled'><li>Strategic Consulting Services</li><li>Corporate Structuring Advisory Services</li><li>Financial Structuring and Planning Services</li><li>Project Feasibility Report Preparation</li><li>Direct and Indirect Taxation Planning</li><li>Financial, Legal, Liability and Business Risks Identification and Mitigation Services</li></ul>"
  }, {
    title: "TRANSACTION SUPPORT AND DUE DILIGENCE",
    content: "<p>In the globalized market of strategic investment and mergers and acquisitions, you need a partner who can unlock hidden value and avoid commercial pitfalls.</p><ul class='dot-blue list-unstyled'><li>Financial, Tax, Legal, IPR, Human Resources and Business Due Diligence</li><li>Identification of Value Drivers</li><li>Identification of Risks and Risk Mitigation Approaches</li><li>Transaction Structuring</li><li>Financial Forecasting and Assumption Evaluation</li><li>Feasibility Studies</li><li>Working Capital Assessments</li></ul>"
  }, {
    title: "EXECUTION SUPPORT",
    content: "<p>Putting together a strategy is one thing, executing it is a whole other thing. Unlike most strategic consultants, we ensure that the strategy is implemented across all levels, creating real and effective change in the organization.</p><ul class='dot-blue list-unstyled'><li>Planning and Budgeting Support</li><li>Reporting Processes Support</li><li>Long Term and Short Term Financial Arrangement Support</li><li>Performance Management Support</li><li>Legal Documentation Support</li><li>Human Resource Management Support</li><li>Risk Mitigation Support</li></ul>"
  }, {
    title: "ADVISORY ON FOREIGN BUSINESS SETUP IN INDIA",
    content: "<p>In recent years, India has been attracting numerous foreign companies who are keen on tapping its vast potential. But the country being a maze of varied population, traditions and culture, time-consuming registrations, bureaucratic clearances, linguistic hurdles and red tape; the lucrative opportunity translates into a tricky challenge while understanding its social and business nuances.</p><p>To interpret this multi-cultural and political mélange; Innergize Solutions assists these foreign companies to build their foundation in India and propel them in the direction of success. We offer a portfolio of services that encompass everything from secretarial, legal, accounting, taxation, intellectual property, financial, human resources and much more to ensure that every essential aspect is implemented systematically, without having to repeatedly approach multiple agencies. These services can be totally customized according to specific needs which would enable the global entities to confidently establish and smoothly commence and sustain operations in India.</p><p>Powering the Foreign Business Setup team is Anupa Shah, a Chartered Accountant, who is highly conversant and experienced in finance, taxation and corporate matters. It is her incisive thinking and in-depth understanding which are extensively used to seamless solutions that deliver beyond client specifications. Coupled with her leadership and organizational skills; Innergize has an expert team of professionals who would provide strategic advice, assistance, execution and support at every stage to any foreign company or investor entering India.</p><p>Our one stop shop offers following spectrum of services:</p><ul class='dot-blue list-unstyled'><li>Company Formation</li><li>Secretarial Compliances</li><li>Regulatory Compliances</li><li>Direct Tax Registrations and Compliances</li><li>Indirect Taxation and Registrations</li><li>Manpower, Remuneration and HR Related Procedures and Compliances</li><li>Business Planning and Operations</li><li>Financing of Business Operations</li><li>IFRS Implementation Services</li><li>Legal Support Services</li><li>Intellectual Property Services</li><li>Other Support Services</li></ul>"
  }, {
    title: "INDIAN HEALTHCARE INFRASTRUCTURE CONSULTING",
    content: "<p>Indian healthcare sector has become highly competitive and  in order to keep pace with the ever changing environment;Innergize has developed a strong strategy, management practice and an experienced team to shoulder challenging projects and operations of its clients in healthcare arena. We further strengthen our reputation by providing dedicated healthcare advisory services from strategy to implementation. </p><p>We support our public and private clients to redefine their healthcare strategy in order to achieve enhanced quality and economically viable operations. We understand their needs and provide answers with tailored approach through a combination of strategic, operational and financial skills. </p><p>Healthcare Infrastructure Consulting is headed by <b>Dr. Arun John</b>, a Healthcare Management consultant with over 30 years of Hospital &amp; Health Care industry experience and has a successful association with major names in healthcare industry. His forte lies in hospital and healthcare projects, wherein he brings a matured experience, right from conceptualization, designing, commissioning to making it a commercial success.</p><ul class='dot-blue list-unstyled'><li>Greenfield Projects</li><li>Tendering and Project Management Support</li><li>Upgradation and Modernization</li><li>Architectural and Structural Design</li><li>Strategic, Financial and Business Consulting Services</li><li>Transaction Support and Due Diligence Services</li><li>Execution Support Services</li><li>Accreditation Consultancy (JCI, NABH, NABL, ISO 9001)</li><li>Developing SOPs, Policies, Tariffs, etc.</li><li>Hospital Management Information System Consulting</li><li>Intellectual Property Rights</li><li>HRD &amp; Training, Manpower Planning, Selection &amp; Recruitment</li></ul></div>"
  }];
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
