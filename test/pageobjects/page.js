import { browser } from '@wdio/globals'




/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

  //Wait for element's visibility and click on it
  async waitforVisibilityAndClickAction(element, elementName) {
    await this.verifyElementsPresence(element, elementName)
    await this.verifyElementIsClickable(element, elementName)
    await element.click().then(function () {
        console.log("Clicked on element:" + elementName);
    }, function (err) {
        console.log("Failed in clciking the element : " + elementName);
    } )
}
//Click on particular WebElement
async clickAction(element, elementName) {
    await element.click().then(function () {
        console.log("Clicked on element:" + elementName);
    }, function (err) {
        console.log("Failed in clciking the element : " + elementName);
    }
    )}
   


//Reusable function to getText of particular webelement
    async getTextValue(element, elementName){
    await element.getText().then(function (text) {
        console.log("Text in element " + elementName + " is :" + text);
        return text
    }, function (err) {
        console.log("Failed  getting text : " + elementName);
    }
)}


    //Entering the string value into a text fields
    async EnterValues(element, value, elementName) {
        await this.verifyElementsPresence(element, elementName)
        await element.clearValue()
        await element.setValue(value).then(function () {
            console.log("Entered text : " + value + " in element :" + elementName);
        }, function (err) {
            console.log("Failed in entering "+value+" the date value into a date picker field  : " + elementName);
        }
       )
        
    }
    //Entering the date value into a date picker field (MM/DD/YYYY)
    async EnteringDateValue(element,elementName,date){
        await this.verifyElementsPresence(element, elementName)
        await element.clearValue()
        await element.setValue(date).then(function () {
            console.log("Entered Date is for " + elementName + ": " + date );
        }, function (err) {
            console.log("Failed in entering the "+ date +" into a date picker field  : " + elementName);
        }
       )}

     //Select the dropdown value based on the text present
     async selectFromDropDownByVisibleText(element, value, elementName) {
        await this.verifyElementsPresence(element, elementName)
        await this.verifyElementIsClickable(element, elementName)
        await element.selectByVisibleText(value).then(function () {
            console.log("Selected value:" + value + "from " + elementName);
        }, function (err) {
            console.log("Failed in selecting the value : " + value + "from " + elementName);
        }
        )
        }
    async verifyElementsPresence(element, elementName) {
        await element.waitForDisplayed({ timeout: 3000, timeoutMsg: "Element : " + elementName + " is not displayed" })
        console.log("Element : " + elementName + " is displayed");

    }

    async verifyElementIsClickable(element, elementName) {
        await element.waitForClickable({ timeout: 3000, timeoutMsg: "Element : " + elementName + " is not clickable" })
        console.log("Element : " + elementName + " is clickable");
    }
    //Reusable function to count the number of values inside a particular dropdown
    async countDropDownValuesPresent3(element, elementName) {
        await this.verifyElementsPresence(element, elementName)
       let Count= await element.$$('option').length
       return Count;
    }

    async countDropDownValuesPresent(element, elementName) {
        await this.verifyElementsPresence(element, elementName)
        let Count=0
       await element.$$('option').length.then(function (value) {
        Count=value;
    }, function (err) {
        console.log("Not able to count dropdown value in element "+elementName);
    } )
       return Count;
    }


    //Reusable function to Extract values present inside a particular Dropdown
    async ExtractAllDropDownValues(element, elementName) {
        await this.verifyElementsPresence(element, elementName)
        let Values= await element.$$('option')
        for(let i=0;i<Values.length;i++){
        Values[i]=await Values[i].getAttribute('value') 
        }
       return Values
    }
    //Entering the date value into a date picker field (MM/DD/YYYY)
    async EnteringDateValue(element,elementName,date){
    await this.verifyElementsPresence(element, elementName)
    await element.clearValue()
    await element.setValue(date).then(function () {
        console.log("Entered Date is for " + elementName + ": " + date );
    }, function (err) {
        console.log("Failed in entering the date value into a date picker field  : " + elementName);
    }
   )}
    //Function to assert expected numeric value with actual numeric value
    async assertNumricValues(ExpectedValue, actualValue ) {
        expect(ExpectedValue).toBe(actualValue)
    }



}
