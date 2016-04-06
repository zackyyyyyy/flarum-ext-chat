var flarum = require('flarum-gulp');

flarum({
  modules: {
    'zacky/chat': [
      'src/**/*.js'
    ]
  }
});
