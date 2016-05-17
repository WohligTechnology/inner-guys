var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
            var navigation = [
               {
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
