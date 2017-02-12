(function () {

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  //$urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categorieslist.template.html',
      controller: 'CategoriesListController as mainList',
      resolve: {
        list: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items',
      templateUrl: 'templates/itemslist.template.html'
    });
}

})();
