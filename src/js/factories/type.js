angular
  .module('project')
  .factory('Type', Type);

Type.$inject = ['$resource', 'API_URL'];
function Type($resource, API_URL ) {
  return new $resource(`${API_URL}/types/:id`, { id: '@id' }, {
    update: { method: 'PUT'}
  });
}
