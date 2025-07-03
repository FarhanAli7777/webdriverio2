import loginPage from '../pageobjects/login.page.js';

describe("Ecommerse Application", async()=>
{
    it ('Login Fail Page', async()=>
    {
    await browser.url("https://www.globalsqa.com/demo-site/datepicker/")
       await browser.pause(5000)
       await $(".demo-frame").isDisplayed()
        const B=await $(".demo-frame")
        console.log(await B.getAttribute("class"))
        await browser.switchToFrame(B)
        //loginPage.verifyElementsPresence($("#datepicker"),"nnnn")
        const C=$("#datepicker")
        await loginPage.EnteringDateValue(B,"h","01/19/2023")
        await browser.switchToParentFrame();
        
       
      })
       



}
)