angular
  .module('project')
  .controller('TypesNewCtrl', TypesNewCtrl);

TypesNewCtrl.$inject = ['Type', '$state'];
function TypesNewCtrl(Type, $state) {
  const vm = this;
  vm.type = {};

  function typesCreate() {

    Type
      .save({ type: vm.type })
      .$promise
      .then(() => $state.go('typesIndex'));
  }

  vm.create = typesCreate;
}
