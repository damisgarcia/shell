'use strict'

var app = angular.module("ngFlickr", [])

app.factory("Flickr",['$http', function($http){
  var build_url = function(params){
    var request = URI(self.base)
    request.addSearch('api_key', self.api_key)
    request.addSearch('format', self.format)
    request.addSearch('nojsoncallback', 1)

    angular.forEach(params, function(value, key, array){
      request.addSearch(key, value)
    })

    return request
  }

  var self = this

  self.api_key = "748b0899a5ba0f618fc6a6273b3991d5"
  self.base = "https://api.flickr.com/services/rest/"
  self.format = "json"

  self.photos = {
    getRecent: function(params){
      var request = build_url(params)
      request.addSearch("method","flickr.photos.getRecent")
      return $http.get(request.toString())
    },
    getFavorites: function(params){
      var request = build_url(params)
      request.addSearch("method","flickr.photos.getFavorites")
      return $http.get(request.toString())
    },
    search: function(params){
      var request = build_url(params)
      request.addSearch("method","flickr.photos.search")
      return $http.get(request.toString())
    }
  }

  return self
}])
