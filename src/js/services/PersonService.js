angular.module('RDash').factory('PersonService',['$http', '$q', 'apiUrl', PersonService]);

function PersonService($http, $q, apiUrl) {

  var resource = "person";

  var service = {};
  service.getAll = getAll;
  service.findById = findById;
  service.getByTechs = getByTechs;
  service.getCountByTechs = getCountByTechs;
  return service;

  function getAll(){
    var q = $q.defer();
    $http.get(apiUrl + resource).then(function(data) {
      q.resolve(data.data);
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }
  function findById(id){
    var q = $q.defer();
    $http.get(apiUrl + resource +'/'+id).then(function(data) {
      q.resolve(data.data);
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }

  function getByTechs(page, techs){
    var q = $q.defer();
    var techsQuery = "";
    for(tech in techs){
      techsQuery+="tech="+techs[tech]+"&";
    }
    $http.get(apiUrl + resource +'/page/'+page+"?"+techsQuery).then(function(data) {
      q.resolve(data.data);
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }

  function getCountByTechs(page, techs){
    var q = $q.defer();
    var techsQuery = "";
    for(tech in techs){
      techsQuery+="tech="+techs[tech]+"&";
    }

    $http.get(apiUrl + resource +'/count/?'+techsQuery).then(function(data) {
      q.resolve(data.data);
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }
};
