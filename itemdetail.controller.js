(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['list'];
function ItemDetailController(list) {
  var itemDetails = this;
  itemDetails.list = list;
}

})();
