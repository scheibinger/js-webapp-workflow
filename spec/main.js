require.config({
  shim: {
  },

  paths: {
    jquery: 'app/scripts/vendor/jquery.min'
  }
});
 
require(['app/scripts/app'], function(app) {
  // use app here
  console.log(app);
});