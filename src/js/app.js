angular
  .module('project', ['satellizer','ngResource', 'ui.router', 'checklist-model','ui.bootstrap', 'ngAnimate','ngMessages'])
  .constant('API_URL', 'http://localhost:3000/api');
