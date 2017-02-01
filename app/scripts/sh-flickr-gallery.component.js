'use strict'

var shFlickrGalleryCtrl = function(Flickr){
  var self = this

  self.url_for = function(photo){
    return "https://farm"+ photo.farm +".staticflickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +".jpg"    
  }

  self.$onInit = function(){
    Flickr.photos.search({tags: "background,flowers,summer",per_page: 30}).then(function(response){
      console.log(response)
      self.photos = response.data.photos.photo
    })
  }

  return self
}

shFlickrGalleryCtrl.$inject = ['Flickr']

var shFlickrGallery = {
  controller: shFlickrGalleryCtrl,
  templateUrl: "templates/sh-flickr-gallery.html"
}

angular.module('shellderApp').component('shFlickrGallery', shFlickrGallery)
