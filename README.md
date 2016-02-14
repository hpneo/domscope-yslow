# YSlow Reporter

YSlow Reporter (for [DOMScope](https://domscope.com/)) is a REST API for [YSlow](https://github.com/sitespeedio/yslow) running under PhantomJS.

## Usage

`https://domscope-yslow.herokuapp.com/?url=[URL]&option1=value1&option2=value2`

## Options

* `info`: specify the information to display/log (*basic*|*grade*|*stats*|*comps*|*all*) (default: *all*)
* `ruleset`: specify the YSlow performance ruleset to be used (*ydefault*|*yslow1*|*yblog*) (default: *ydefault*)
* `threshold`: for test formats, the threshold to test scores (*[0-100]*|*[A-F]*|*{JSON}*) e.g.: *B* or *75* or *'{"overall": "B", "ycdn": "F", "yexpires": 85}'* (default: *80*)
* `ua`: specify the user agent string sent to server when the page requests resources
* `viewport`: specify page viewport size WxY, where W = width and H = height (default: *400x300*)
* `headers`: specify custom request headers, e.g.: *'{"Cookie": "foo=bar"}'*
* `cdns`: specify comma separated list of additional CDNs

## Demo
[Test here](https://domscope-yslow.herokuapp.com/?url=domscope.com&cdns=fonts.googleapis.com,maxcdn.bootstrapcdn.com&info=grade)