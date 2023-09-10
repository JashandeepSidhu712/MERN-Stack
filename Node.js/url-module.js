var url = require("url");

var fullurl = "http://jashansidhu.com:80/users/open.html?uid=jashan712&pwd=sidhu";

var parsedUrl = url.parse(fullurl);
console.log(parsedUrl);

var query = parsedUrl.query;
console.log(query);

var qs = require("querystring");

var obj = qs.parse(query);

console.log(obj);
console.log(obj.uid);

PS C:\Users\lcp\Dropbox\mernstack2023\nodejs> node url-module.js
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'jashansidhu.com:80',
  port: '80',
  hostname: 'jashansidhu.com',
  hash: null,
  search: '?uid=jashan712&pwd=sidhu',
  query: 'uid=jashan712&pwd=sidhu',
  pathname: '/users/open.html',
  path: '/users/open.html?uid=jashan712&pwd=sidhu',
  href: 'http://jashansidhu.com:80/users/open.html?uid=jashan712&pwd=sidhu'
}
uid=jashan712&pwd=sidhu
[Object: null prototype] { uid: 'jashan712', pwd: 'sidhu' }
jashan712

