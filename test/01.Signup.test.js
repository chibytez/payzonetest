const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
const { expect } = require('chai');
// const chrome = require('selenium-webdriver/chrome');
// const chromedriver = require('chromedriver')


describe('End to End Test Suite', () => {
    const driver = new Builder().forBrowser('firefox').build();

    it('should launch', () =>{
        driver.get('https://uat.payzone.ng');
    })

    it('it should sign up a user with inputs', async () =>{
        try {
           await driver.findElement(By.xpath(`//button[@title='Account']`)).click();
           await driver.findElement(By.xpath(`(//a[@class='pz-btn-group__btn'])[1]`)).click();
           await driver.wait(until.elementLocated(By.xpath(`//input[@name='firstname']`)),2000).sendKeys("chibuike");
           await driver.wait(until.elementLocated(By.xpath(`//input[@name='lastname']`)),2000).sendKeys("lastNameTest");
           await driver.findElement(By.xpath(`//input[@name='phone_number']`)).sendKeys("08065751138");
           await driver.findElement(By.xpath(`//input[@name='email']`)).sendKeys("chibuiky@gmail.com");
           await driver.findElement(By.xpath(`//input[@name='password']`)).sendKeys("password");
           await driver.wait(until.elementLocated(By.xpath(`//button[@class='pz-btn pz-btn--lg position-relative pz-btn--primary pz-btn--wide']`)),2000).click(); 
        } catch (error) {
            console.log(error);
        }
        
    })
 
})
