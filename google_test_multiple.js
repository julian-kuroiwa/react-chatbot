var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

searchTest(driver_fx);
searchTest(driver_chr);

function searchTest(driver) {
  driver.get('http://localhost:3000/');
  driver.findElement(By.name('userField')).sendKeys('Testing');

  driver.sleep(1000).then(function() {
    driver.findElement(By.className('Button_Button__3R1xi')).sendKeys(webdriver.Key.TAB);
  });

  driver.findElement(By.className('Button_Button__3R1xi')).click();

  driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'React App') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
      driver.quit();
    });
  });
}
