# Angular 5 - Live Preview

This extension provide preview of Angular 5 outputs which execute on web server. 
When you save any file(s), this extension helping easy to preview result of reloaded browser or side panel (live preview feature).
You can call these features from the context menu or editor menu on **.angular-cli.json**. 

## Features

**`Preview on side panel`**
Open preview of Angular 5 on right side panel. With this feature, you can easly check the operation of HTML, CSS, SASS, SCSS, JavaScript and TypeScript.


**`Open in web browser`**
Open Web Page on default browser. You can check all operation with web page.


## Preview
![Angular 5 - Live Preview](https://raw.githubusercontent.com/gurayyarar/angular5-live-preview/master/images/preview.gif)

## Extension Settings
|Option|Description|Type|Default Value|
|---|---|---|---|
|`angular5WebServer.port`|The number of port|number|4200|
|`angular5WebServer.title`|The title of right side panel|string|Angular 5 - Live Preview|


**Example**

    {
	    "angular5WebServer.port": 4205,
	    "angular5WebServer.title": "Live Preview" 
	}

## Known Issues

When you save any file(s), web server rarely can not reload the browser or side panel automatically. In such cases, please close all web server (right side panel and if you run browser) and run again.

## Acknowledgements

This extension use [@angular-cli](https://github.com/angular/angular-cli). I would like to thank angular team for useful works.

## License
**Angular 5 - Live Preview** is an open source project that is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Donations
Donations are **greatly appreciated!**

**[BUY ME A COFFEE](http://bit.ly/2yXXW1K)**