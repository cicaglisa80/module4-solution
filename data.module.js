(function () {

angular.module('Data', [])
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['list'];
function MainShoppingListController(list) {
  var mainList = this;
  mainList.list = list;
}

//Data.$inject = ['MenuDataService'];
function Data() {

}

})();
