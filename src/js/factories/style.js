angular
  .module('project')
  .factory('Style', Style);

Style.$inject = ['$resource', 'API_URL'];
function Style($resource, API_URL ) {
  return new $resource(`${API_URL}/styles/:id`, { id: '@id' }, {
    update: { method: 'PUT'}
  });
}
