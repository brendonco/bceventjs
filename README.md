### bceventjs - is a lightweight framework focused on DOM event broadcasting.

### Installation:
$ npm install bceventjs --save-dev

#### Usage:


#### Broadcast
```
var bcevent = require("bceventjs").bcevent,
onBroadcast = bcevent.onBroadcast,
onListen = bcevent.onListen;

onBroadcast("test", "test event");
```

#### Receiver
```
bcevent.onListen("test", function(e){
    console.log("listener:" + e.args); 
});
```
