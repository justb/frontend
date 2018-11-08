var stylus = require('../')
//   , str = require('fs').readFileSync(__dirname + '/test.styl', 'utf8');

stylus(str)
//   .set('filename', __dirname + '/test.styl')
  .import('mixins/vendor')
  .render(function(err, css){
  if (err) throw err;
  console.log(css);
});