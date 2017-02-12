(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['list'];
function CategoriesListController(list) {
  var mainList = this;
  console.log('here getting data');
  mainList.list = list;
}

})();
