const { Builder, By, Key, until, browser } = require('selenium-webdriver');
const { expect } = require('chai');
// let millisecondsToWait = 5000;

// setTimeout(function() {
//     // Whatever you want to do after the wait
// }, millisecondsToWait);

describe('Login and Setup Wallet', () => {
    const driver = new Builder().forBrowser('firefox').build();

    it('should launch', () =>{
        driver.get('https://uat.payzone.ng');
    })

    it('it should Login a user', async () =>{
        try {
           await driver.findElement(By.xpath(`//button[@title='Account']`)).click();
           await driver.findElement(By.xpath(`(//a[@class='pz-btn-group__btn'])[2]`)).click();
           await driver.wait(until.elementLocated(By.xpath(`//input[@name='email']`)),2000).sendKeys("chibuiky@gmail.com");
           await driver.findElement(By.xpath(`//input[@ 
           name='password']`)).sendKeys("password");
           await driver.wait(until.elementLocated(By.xpath(`//button[@class='pz-btn pz-btn--lg position-relative pz-btn--primary pz-btn--wide']`)),2000).click();
        } catch (error) {
            console.log(error);
        }   
    })

    it('it should create a wallet', async () => {
        try {
            await driver.wait(until.elementLocated(By.xpath(`//button[@class='wallet__value']`)),4000).click();
            await driver.wait(until.elementLocated(By.xpath(`//input[@name='bvn']`)),4000).sendKeys("22163615608");
            await driver.wait(until.elementLocated(By.xpath(`//input[@name='pin']`)),4000).sendKeys("1234");
            await driver.wait(until.elementLocated(By.xpath(`//input[@name='pin_confirmation']`)),4000).sendKeys("1234");
            await driver.wait(until.elementLocated(By.xpath(`//i[@class='fa fa-check text-success']`)),4000).click();
            await driver.wait(until.elementLocated(By.xpath(`//button[@type='submit']`)),4000).click();
        } catch (error) {
            console.log(error);
        }
    })
 
})
     