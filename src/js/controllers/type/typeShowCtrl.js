angular
  .module('project')
  .controller('TypesShowCtrl', TypesShowCtrl);

TypesShowCtrl.$inject = ['Type', '$stateParams', '$state'];
function TypesShowCtrl(Type, $stateParams, $state) {
  const vm = this;

  Type.get($stateParams, (data)=>{
    vm.type = data;
    console.log(vm.type);
  });


  function typesDelete() {
    vm.type
        .$remove()
        .then(() => $state.go('typesIndex'));
  }

  vm.delete = typesDelete;
}
