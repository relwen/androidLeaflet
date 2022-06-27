
// Dom7
var $ = Dom7;
// Theme

var theme = 'md';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}


// Init App
 var myApp = new Framework7({
  id: 'com.mrz.mos',
  el: '#app',
  theme,
  view : {
  pushState: true,
  browserHistory: true,
  },  


  // routes.js,
  routes: routes,
   
  popup:{
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653xE14',
  },
  
});



myApp.views.create('.view-main', {
  url: '/'
});



