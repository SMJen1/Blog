require.config({
  paths: {
    angular: '../lib/angular/angular',
    angularRoute: '../lib/angular-route/angular-route',
    main: 'main'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  }
});

require(['main'], function(main) {
});