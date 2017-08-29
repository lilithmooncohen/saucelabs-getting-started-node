var webdriver = require('selenium-webdriver'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
server = (process.env.SAUCE_SERVER || 'ondemand.saucelabs.com'),
port = (process.env.SAUCE_PORT || '80'),
endpoint = (process.env.SAUCE_ENDPOINT || 'http://saucelabs.com/test/guinea-pig'),
browser = (process.env.SAUCE_BROWSER || 'chrome'),
browserVersion = (process.env.SAUCE_BROWSER_VERSION || '47.0'),
platform = (process.env.SAUCE_PLATFORM || 'Windows 10'),
driver;

driver = new webdriver.Builder().
withCapabilities({
'browserName': browser,
'platform': platform,
'version': browserVersion,
'username': username,
'accessKey': accessKey
}).
usingServer("http://" + username + ":" + accessKey +
          "@" + server + ":" + port + "/wd/hub").
build();

driver.get(endpoint);

console.log('Test info')
console.log('---------')
console.log ('Sauce user: ' + username)
console.log('Sauce server: ' + server)
console.log('Sauce port: ' + port)
console.log ('Platform: ' + platform)
console.log('Browser: ' + browser)
console.log('Browser version: ' + browserVersion)
console.log ('Test endpoint: ' + endpoint)
console.log('-------------')
console.log ('Running test')
console.log('-------------')
driver.getTitle().then(function (title) {
console.log("title is: " + title);
});

driver.quit();
