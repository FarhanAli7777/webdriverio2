
import loginPage from '../pageobjects/login.page.js';

describe("Ecommerse Application2", async()=>
{
    it ('Login Fail Page2', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        console.log("farhan2")
       await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
       await $("input#username").setValue("rahulshettyacadmy")
       await $("input#password").setValue("rahulshettyacadmy")
       let Count= await loginPage.countDropDownValuesPresent($('//select[@class]'),'Role')
      console.log("Count of number of values present inside dropdown : " + Count);
       let Values= await loginPage.ExtractAllDropDownValues($('//select[@class]'),'Role')
       for(let i=0;i<Values.length;i++){
        console.log(Values[i])
      }
      await loginPage.getTextValue($("[for='username']"),"hheeeh")

      
       //await $("input#signInBtn").click();
       //loginPage.clickAction($("input#signInBtn"),"SignInButton")
       //console.log(await $("div.alert").getText())
      
       //await browser.waitUntil(async()=>await $("input#signInBtn").getAttribute('value')==="Sign In"
      // ,
   // {
     //    timeout:5000,
     //  timeoutmsg:"gggggg"
       }
    )
   
       
    


    } )

