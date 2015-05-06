### bceventjs - is a lightweight framework focused on DOM event broadcasting.

### Installation:
$ npm install bceventjs --save-dev

#### Usage:

```
var bcevent = require("bceventjs").bcevent,
onBroadcast = bcevent.onBroadcast,
onListen = bcevent.onListen;

onBroadcast("test", "test event");

bcevent.onListen("test", function(e){
    console.log("listener:" + e.args); 
});
```
