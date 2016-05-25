// if (isproduction) {
//   adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//   adminURL = "http://localhost/demo/index.php";
// }

var adminURL = "http://wohlig.co.in/innergizebackend/index.php/";
var imgurl = "http://wohlig.co.in/innergizebackend/uploads/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "About Us",
    classis: "active",
    anchor: "about-us",
    subnav: []
  }, {
    name: "Services",
    classis: "active",
    anchor: "services",
    subnav: []
  }, {
    name: "Affiliates",
    classis: "active",
    anchor: "affiliates",
    subnav: []
  }, {
    name: "Careers",
    classis: "active",
    anchor: "careers",
    subnav: []
  }, {
    name: "Clients",
    classis: "active",
    anchor: "clients",
    subnav: []
  }, {
    name: "Downloads",
    classis: "active",
    anchor: "downloads",
    subnav: []
  }, {
    name: "Contact Us",
    classis: "active",
    anchor: "contact-us",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    submitContact: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'json/contactSubmit',
        method: 'POST',
        withCredentials: true,
        data: formData
      }).success(callback);
    },
    submitCareers: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'json/careersSubmit',
        method: 'POST',
        withCredentials: true,
        data: formData
      }).success(callback);
    },
    // submitContact: function(formData, callback) {
    //   console.log(formData);
    //   $http({
    //     url: adminURL + 'json/contactSubmit',
    //     method: 'POST',
    //     withCredentials: true,
    //     data: {
    //       "name": formData.name,
    //       "company": formData.company,
    //       "email": formData.email,
    //       "phone": formData.phone,
    //       "website": formData.website,
    //       "comments": formData.comments,
    //     }
    //   }).success(callback);
    // },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
