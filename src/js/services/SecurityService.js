angular.module('RDash').factory('SecurityService',['$http', '$q', 'apiUrl', '$location', SecurityService]);

function SecurityService($http, $q, apiUrl, $location) {

  var resource = "session";

  var service = {};
  service.login = login;
  service.getUrl = getUrl;
  return service;

  function getUrl(){
    var q = $q.defer();
    console.log("login");
    $http.get(apiUrl + "login").then(function(data) {
      console.log(data.data.data);
      q.resolve(data.data.data);
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }
  function login(token){
    var q = $q.defer();
    console.log("login");
    $http.get(apiUrl + "?code=" + token).then(function(data) {
      q.resolve(data.data);
      console.log("login ok");
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }
};
