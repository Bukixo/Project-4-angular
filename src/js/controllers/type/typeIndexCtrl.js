angular
  .module('project')
  .controller('TypesIndexCtrl', TypesIndexCtrl);


TypesIndexCtrl.$inject = ['Type'];
function TypesIndexCtrl(Type) {
  const vm = this;

  vm.all = Type.query();
  console.log();
  console.log(vm.all);
}
