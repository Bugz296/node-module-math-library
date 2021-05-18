var my_module = require('./my_module')();     //notice the extra invocation parentheses!
const querystring = require('querystring');
my_module.greet();
my_module.add(5,6);
console.log(querystring.decode("https://test.com/?name=roger"));