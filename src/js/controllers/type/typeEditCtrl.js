angular
  .module('project')
  .controller('TypesEditCtrl', TypesEditCtrl);

TypesEditCtrl.$inject = ['Type', '$stateParams', '$state'];
function TypesEditCtrl(Type, $stateParams, $state) {
  const vm = this;

  vm.type = Type.get($stateParams);

  function typesUpdate() {

    Type.update({ id: vm.type.id, type: vm.type })
        .$promise
        .then(() => $state.go('typesIndex', $stateParams));
  }

  vm.update = typesUpdate;
}
