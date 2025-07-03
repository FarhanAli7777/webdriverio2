import loginPage from '../pageobjects/login.page.js';

describe("Ecommerse Application", async()=>
{
    it ('Login Fail Page', async()=>
    {
       // await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      //await loginPage.getText($("#login-form > div:nth-child(2) > label"),"name")

      await loginPage.assertNumricValues(2,'ggg')
      //const D=$("#signInBtn")
      //await browser.pause(2000)
      //await loginPage.clickAction(D,"signin")
      //await browser.pause(8000)
       
      })
       



}
)