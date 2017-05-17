angular
  .module('project')
  .controller('StylesEditCtrl', StylesEditCtrl);

StylesEditCtrl.$inject = ['Style', '$stateParams', '$state'];
function StylesEditCtrl(Style, $stateParams, $state) {
  const vm = this;

  vm.style = Style.get($stateParams);

  function stylesUpdate() {
    Style.update({ id: vm.style.id, style: vm.style })
        .$promise
        .then(() => $state.go('stylesShow', $stateParams));
  }
  vm.update = stylesUpdate;
}
