angular
  .module('project')
  .controller('UsersEditCtrl', UsersEditCtrl);
//
// UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
// function UsersEditCtrl(User, $stateParams, $state) {
//   const vm = this;
//
//   vm.user = User.get($stateParams);
//
//   function usersUpdate() {
//     vm.user
//     .$update()
//     .then(() => $state.go('usersShow', $stateParams));
//   }
//
//   vm.update = usersUpdate;
// }

UsersEditCtrl.$inject = ['User', '$state', '$stateParams'];
function UsersEditCtrl(User, $state, $stateParams){
  //gets the user from the profile passed in
  const vm = this;

  vm.update= updateUser;
  vm.user = User.get($stateParams);
//updates the user
  function updateUser(){
    vm.user
    .$update()
    .then(()=> {
      $state.go('usersShow', $stateParams);
    });
  }

}
