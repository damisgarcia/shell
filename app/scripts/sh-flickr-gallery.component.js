'use strict'

var shFlickrGalleryCtrl = function(Flickr){
  var self = this

  self.url_for = function(photo){
    return "https://farm"+ photo.farm +".staticflickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +".jpg"
  }

  self.$onInit = function(){
    Flickr.photos.search({tags: "flowers, cats, dogs",per_page: 30, extras: "url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o"}).then(function(response){
      self.photos = response.data.photos.photo
    })
  }

  self.search = function(e){
    e.preventDefault()
    // clear photos
    self.photos = []
    Flickr.photos.search({tags: self.terms ,per_page: 30, extras: "url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o"}).then(function(response){
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
