angular
  .module('project')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', 'User'];
function MainCtrl($rootScope, $state, $auth, User) {
  const vm = this;

  vm.currentUser = null;

  vm.isAuthenticated = $auth.isAuthenticated;
  console.log($auth.message);
  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload() && !vm.currentUser) vm.currentUser = User.get($auth.getPayload());
  });

  const protectedStates = ['usersShow','usersEdit','typesEdit','stylesNew', 'stylesEdit','typesShow','typesIndex','home'];
//Here we are creating an array of protected state names (the names we give each state in config/router.js), and then each time we start to change to a different state, we check whether the user is not logged in, and if the state is in that array, and if it is, redirect the user to the login page and tell them they should be logged in to view that page.
  $rootScope.$on('$stateChangeStart', (e, toState) => {
    if((!$auth.isAuthenticated() && protectedStates.includes(toState.name))) {
      e.preventDefault();
      $state.go('login');
      vm.message = 'You must be logged in to access this page.';
    }
    vm.pageName = toState.name;
  });

  function logout() {
    $auth.logout();
    vm.currentUser = null;
    $state.go('login');

  }

  vm.logout = logout;
}
