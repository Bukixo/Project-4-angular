angular
  .module('project')
  .controller('StylesNewCtrl', StylesNewCtrl);

StylesNewCtrl.$inject = ['Style', 'Type', '$state'];
function StylesNewCtrl(Style, Type, $state) {
  const vm = this;
  vm.style = {};

  vm.type = Type.query();

  function stylesCreate() {
    // vm.type.filter((thisType)=> {
    //   thisType.id === vm.style.type_id;
    // });
    console.log(vm.type);
    Style
    .save({ style: vm.style })
    .$promise
    .then(() => $state.go('typesShow', { id: vm.style.type_id}));
    
  }

  vm.create = stylesCreate;
}
