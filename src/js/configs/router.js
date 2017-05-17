angular
  .module('project')
  .config(Router);

Router.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
function Router($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'js/views/static/home.html',
    controller: 'HomeCtrl as home'
  })
  ///////////////////STYLES////////////////////////
    .state('stylesIndex', {
      url: '/styles',
      templateUrl: 'js/views/style/index.html',
      controller: 'StylesIndexCtrl as stylesIndex'
    })
    .state('stylesNew', {
      url: '/styles/new',
      templateUrl: 'js/views/style/new.html',
      controller: 'StylesNewCtrl as stylesNew'
    })
    .state('stylesShow', {
      url: '/styles/:id',
      templateUrl: 'js/views/style/show.html',
      controller: 'StylesShowCtrl as stylesShow'
    })
    .state('stylesEdit', {
      url: '/styles/:id/edit',
      templateUrl: 'js/views/style/Edit.html',
      controller: 'StylesEditCtrl as stylesEdit'
    })
    ///////////////////// USERS ////////////////////////
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/user/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/user/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/user/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })
    ///////////////////////TYPE/////////////////////////
    .state('typesIndex', {
      url: '/types',
      templateUrl: 'js/views/type/index.html',
      controller: 'TypesIndexCtrl as typesIndex'
    })
    .state('typesNew', {
      url: '/types/new',
      templateUrl: 'js/views/type/new.html',
      controller: 'TypesNewCtrl as typesNew'
    })
    .state('typesShow', {
      url: '/types/:id',
      templateUrl: 'js/views/type/show.html',
      controller: 'TypesShowCtrl as typesShow'
    })
    .state('typesEdit', {
      url: '/types/:id/edit',
      templateUrl: 'js/views/type/Edit.html',
      controller: 'TypesEditCtrl as typesEdit'
    })

    ////////////////////////Auth/////////////////////////
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/auth.html',
      controller: 'AuthCtrl as auth'
    });
  $urlRouterProvider.otherwise('/home');

}
