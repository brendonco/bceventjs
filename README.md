### bceventjs - is an ES5 lightweight framework focused on DOM event broadcasting.

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

#### Supported Browser
![ScreenShot](http://www.w3schools.com/images/compatible_ie2020.gif) 9+ ![ScreenShot](http://www.w3schools.com/images/compatible_firefox2020.gif) 26 ![ScreenShot](http://www.w3schools.com/images/compatible_chrome2020.gif) 29 ![ScreenShot](http://www.w3schools.com/images/compatible_safari2020.gif) 5
