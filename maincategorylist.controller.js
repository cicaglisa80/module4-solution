(function () {
'use strict';

angular.module('Data')
.controller('MainCategoryListController', MainCategoryListController);

MainCategoryListController.$inject = ['list'];
function MainCategoryListController(list) {
  var mainList = this;
  mainList.list = list;
}

})();
