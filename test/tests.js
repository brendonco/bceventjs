var test = require('unit.js');

describe('load onBroadcast', function(){
    var bcevent = require('../bcevent'),
    onBroadcast = bcevent.onBroadcast,
    onListen = bcevent.onListen;

    it('broadcast test event', function(){
        var spy  = test.spy();

        var listener = function(e) {
            spy();
            // test the value emitted
            test.string(e.args).isIdenticalTo('test event');
        };

        test.given('add listener', function() {
          onListen('test', listener);
        }).when('emit an event', function() {
          onBroadcast('test', 'test event');
        }).then(function() {
          test.function(bcevent.listeners('any.event')).bool(spy.calledOnce).isTrue();
        });
    });
});