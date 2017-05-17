angular
  .module('project')
  .controller('UsersShowCtrl', UsersShowCtrl);


UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  User
  .get($stateParams)
  .$promise
  .then(response =>{
    vm.user =response;
    console.log(vm.user);
  });

}
