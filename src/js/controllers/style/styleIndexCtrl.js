angular
  .module('project')
  .controller('StylesIndexCtrl', StylesIndexCtrl);


StylesIndexCtrl.$inject = ['Style'];
function StylesIndexCtrl(Style) {
  const vm = this;

  vm.all = Style.query();
  console.log(vm.all);
}
