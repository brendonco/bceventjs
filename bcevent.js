var ev = document.createEvent("Event");

exports.bcevent = {
    /**
     * Dispatches an event and notify the registered listener.
     *
     * @param  name - Event name to broadcast
     * @param  args - Optional one or more arguments which will be passed onto the event listener
     */
    onBroadcast: function(name, args) {
      ev.initEvent(name, true, true);

      if(args){
        ev.args = args;
      }

      document.dispatchEvent(ev);
    },

    /**
     * Listen on events of a given name.
     *
     * @param  name - Event name to listen on
     * @param  callback - function to call when the event is received
     */
    onListen: function(name, callback) {
      document.addEventListener(name, callback, false);
    }
};