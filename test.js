var webdriver = require('selenium-webdriver'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
server = (process.env.SAUCE_SERVER || 'ondemand.saucelabs.com'),
endpoint = (process.env.SAUCE_ENDPOINT || 'http://saucelabs.com/test/guinea-pig'),
driver;

driver = new webdriver.Builder().
withCapabilities({
'browserName': 'chrome',
'platform': 'Windows 10',
'version': '47.0',
'username': username,
'accessKey': accessKey
}).
usingServer("http://" + username + ":" + accessKey +
          "@" + server + ":80/wd/hub").
build();

driver.get(endpoint);

console.log ('Sauce user: ' + username)
console.log('Sauce server: ' + server)
console.log ('Test endpoint: ' + endpoint)
driver.getTitle().then(function (title) {
console.log("title is: " + title);
});

driver.quit();
