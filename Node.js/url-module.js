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

OUTPUT

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

EXPLANATION

uses the Node.js url and querystring modules to parse a URL and extract query parameters.

var url = require("url");
  This line imports the Node.js url module, which provides utilities for URL manipulation and parsing.

var fullurl = "http://jashansidhu.com:80/users/open.html?uid=jashan712&pwd=sidhu";
  This line defines a fullurl variable containing a URL as a string.

var parsedUrl = url.parse(fullurl);
  This line uses the url.parse() function to parse the fullurl and create a URL object. 
    The URL object contains various properties like protocol, hostname, port, pathname, query, etc., representing different parts of the URL.

console.log(parsedUrl);
  This line prints the parsed URL object to the console, allowing you to see its structure and the individual components.

var query = parsedUrl.query;
  This line extracts the query string from the parsed URL object and stores it in the query variable.

console.log(query);
  This line prints the query string to the console.

var qs = require("querystring");
  This line imports the querystring module, which provides utilities for parsing and formatting URL query strings.

var obj = qs.parse(query);
  This line uses the qs.parse() function to parse the query string into a JavaScript object. 
    It separates the query parameters and their values into key-value pairs within the object.

console.log(obj);
  This line prints the parsed object containing the query parameters and their values to the console.

console.log(obj.uid);
  This line prints the value associated with the "uid" query parameter from the obj object. 
      In this case, it will output "jashan712" to the console.



