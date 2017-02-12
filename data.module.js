(function () {

angular.module('Data', []).controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var mainList = this;
  mainList.categories = categories;
};

//Data.$inject = ['MenuDataService'];
function Data() {

}

})();
