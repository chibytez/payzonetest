const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
const { expect } = require('chai');
// const chrome = require('selenium-webdriver/chrome');
// const chromedriver = require('chromedriver')


describe('End to End Test Suite', () => {
    const driver = new Builder().forBrowser('firefox').build();

    it('should load page', () =>{
        driver.get('https://uat.payzone.ng');
    })

    it('it should sign out a user with inputs', async () =>{
        try {
           await driver.findElement(By.xpath(`//button[@title='Account']`)).click();
           await driver.findElement(By.xpath(`(//a[@class='pz-btn-group__btn'])[1]`)).click();
           await driver.wait(until.elementLocated(By.xpath(`//input[@name='firstname']`)),2000).sendKeys("firtNameTest");
           await driver.wait(until.elementLocated(By.xpath(`//input[@name='lastname']`)),2000).sendKeys("lastNameTest");
           await driver.findElement(By.xpath(`//input[@name='phone_number']`)).sendKeys("07060848190");
           await driver.findElement(By.xpath(`//input[@name='email']`)).sendKeys("tester@gmail.com");
           await driver.findElement(By.xpath(`//input[@name='password']`)).sendKeys("password");
           await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div[1]/div[2]/div/div/div[2]/div/div/div/div/div[1]/form/div/button`)),2000).click(); 
        } catch (error) {
            console.log(error);
        }
        
    })
 
})
