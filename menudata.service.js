(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];
  var categories = [];

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result){
      categories = result;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
     var response = $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json"),
       params: {
         category: categoryShortName
       }
     })
     .then(function (result) {
       items = [];
       for (var i = 0; i < result.data.menu_items.length; i++) {
         if (~result.data.menu_items[i].description.indexOf(categoryShortName))
         {
           foundItems.push(result.data.menu_items[i]);
         }
       }

       result.data.menu_items = foundItems;
       return result;
     });

     return response;
  };

}

})();