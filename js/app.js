// Define libraries
require.config({
    baseUrl: 'js/',
    paths: {
        jquery: 'libs/jquery-1.7.1.min',
        ember: 'libs/ember-0.9.5.min',
        text: 'libs/require-text'
    }
});

// Load our app
define('App', [
    'jquery',
    'ember', 
    'app/models/api',
    ], function($, Ember, Api) {
        return window.App = Em.Application.create({
            // Application version
            VERSION: '0.1-omfg',
            // Application root element
            rootElement: '#content',
            // Controllers namespace
            Controllers: {},
            // Views namespace
            Views: {},
            // App viewport
            viewport: Em.ContainerView.create({
                switchTo: function(view) {
                    this.get('childViews').popObject();
                    this.get('childViews').pushObject(view);
                }
            }),
            init: function() {
                this._super();
                this.get('viewport').appendTo(this.get('rootElement'));
                // Api instance
                this.set('API', Api.create());
                require(['app/controllers/login'], function(LoginCtrl){
                    LoginCtrl.activate();
                });
            }
        });
    }
);
