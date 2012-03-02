/**
 * Login Controller
 */
define('app/controllers/login', [
    'App',
    'text!app/views/login.html'
    ], function(App, html){
        return App.Controllers.Login = Em.Object.create({
            view: Em.View.create({
                template: Em.Handlebars.compile(html)
            }),
            activate: function() {
                App.viewport.switchTo(this.get('view'));
            },
            authenticate: function() {
                App.API.set('sessionId', $('#login-username').val());
                console.log('Authenticated!');
                //this.view.rerender();
            },
            deauthenticate: function() {
                App.API.set('sessionId', null);
                console.log('Deauthenticated!');
                //this.view.rerender();
            },
        });
    }
);
