/**
 * API Model
 */
define('app/models/api', ['ember'], function(){
    return Em.Object.extend({
        // Use session ID
        sessionId: null,

        /**
         * Check if user is logged in
         *
         * @returns {Bool}, if user session exists
         */
        isLoggedIn: function() {
          return this.get('sessionId') !== null ? true : false;
        }.property()
    });
});
