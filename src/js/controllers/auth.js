angular
  .module('project')
  .controller('AuthCtrl', AuthCtrl);


AuthCtrl.$inject = ['$auth', '$state'];
function AuthCtrl($auth, $state) {
  const vm = this;

  function register(){
    $auth.signup(vm.user)
      .then(user => console.log(user)); //check for object in the console and inside the application check for the token but once login has been setup
  }

  vm.register = register;

  function login() {
    console.log(vm.crendetials);
    $auth.login(vm.credentials)
      .then(() => $state.go('typesIndex'));

  }
  vm.login = login;
  function authenticate(provider){
    $auth.authenticate(provider)
    .then(() => $state.go('typesIndex'));
  }

  vm.authenticate = authenticate;
}
