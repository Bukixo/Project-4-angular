angular
  .module('project')
  .controller('HomeCtrl', HomeCtrl);


HomeCtrl.$inject = ['Home'];
function HomeCtrl(Home) {
  const vm = this;

  vm.all = Home.query();
}
