(function () {

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  //$urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'template/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'template/categorieslist.template.html',
      //controller: 'CategoriesListController as mainList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items',
      templateUrl: 'template/itemslist.template.html'
    });
}

})();
