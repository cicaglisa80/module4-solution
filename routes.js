(function () {

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/main-categorylist.template.html',
      controller: 'MainCategoryListController as mainList',
      resolve: {
        list: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{category}',
      templateUrl: 'templates/main-itemlist.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        list: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            }]
        }
    });
}

})();
