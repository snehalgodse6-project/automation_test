const {test,chromium, expect} =require('@playwright/test')

/*  test('dialogue box',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
    const alertbutton= await page.locator('#my-alert')
    alertbutton.click()
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await page.waitForTimeout(2000)
        await dialog.accept()
       
    })
    await page.waitForTimeout(10000)
})  */
/*
test('dialogue confirm box',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
    const alertbutton= await page.locator('#my-confirm')
    alertbutton.click()
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await page.waitForTimeout(2000)
        await dialog.accept()
    })
   
    await page.waitForTimeout(10000)
})

test('dialogue prompt box',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
    const alertbutton= await page.locator('#my-prompt')
    alertbutton.click()
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await page.waitForTimeout(2000)
        //await dialog.accept('I learned playwright')
        await dialog.dismiss('Oh No!')
       
    })
    await page.waitForTimeout(10000)
})
*/
test.only('dialogue launch modal',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
    const alertbutton= page.locator('#my-modal')
    alertbutton.click()
    const closeButton=page.locator("//button[normalize-space()='Close']")
    closeButton.click()
    await page.waitForTimeout(2000)
    alertbutton.click()
    await page.waitForTimeout(2000)
    const saveChange=page.locator("//button[contains(text(),'Save')]")
    saveChange.click()
    await page.waitForTimeout(10000)
})

test('Login Form submit',async({page})=>{// only used when we want to run only this test case and not all the test cases in the file
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html')
    const username= await page.locator('#username')
    username.fill('admin')
    await page.waitForTimeout(2000)
    const password= await page.locator('#password')
    password.fill('password')
    await page.waitForTimeout(2000)
    page.locator("//button[normalize-space()='Submit']").click()

    await expect(page.locator("#invalid")).toBeVisible() 
    const message=await page.locator("#invalid").textContent()
    console.log(message)
    //expect(message).toContain('Invalid credentials')
    expect(message).not.toContain('Invalid credentials!')
   
   
    await page.waitForTimeout(10000)
})

test('Navigate page',async({page})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
    var homepageUrl = await page.url()
    console.log(homepageUrl)
    const webPage= await page.locator("//a[normalize-space()='Web form']")
    await webPage.click()
    await page.waitForTimeout(2000)
    const webformUrl = await page.url()
    console.log(webformUrl)
    await page.goBack()
    var homepageUrl1 = await page.url()
    console.log(homepageUrl1)
     await page.waitForTimeout(2000)
    await page.goForward()
    const webformUrl1 = await page.url()
    console.log(webformUrl1)

})

test('Navigate multiple page',async({page, context})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
    const webPage= await page.locator("//a[normalize-space()='Web form']")
    const[newPage]=await Promise.all([
        context.waitForEvent('page'),
        
        webPage.click({modifiers:['Control']})// to open in new tab
    ])
    await newPage.waitForLoadState()
    const webformUrl = await newPage.url()
    console.log(webformUrl)
    await page.waitForTimeout(3000)
    const input=await newPage.locator('#my-text-id')
    await input.fill('Snehal')  
    await newPage.waitForTimeout(3000)
    await page.close()
    await page.waitForTimeout(3000)
})

test('Handle calendar event',async({page, context})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
    const calendar=  page.locator("//input[@name='my-date']")
    await calendar.screenshot({path:'calendar.png',fullPage:true})
    await calendar.click()
    await calendar.type('09/24/2026')
    
    await page.waitForTimeout(3000)

})



test('test handle', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
  await page.getByRole('textbox', { name: 'Text input' }).click();
  await page.getByRole('textbox', { name: 'Text input' }).click();
  await page.getByRole('textbox', { name: 'Text input' }).fill('tesst');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('textbox', { name: 'Readonly input' }).click();
  await page.getByLabel('Dropdown (select) Open this').selectOption('1');
  await page.getByRole('textbox', { name: 'Date picker' }).click();
  await page.getByRole('cell', { name: '29' }).click();
});




test('test again', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
  await expect(page.getByRole('checkbox', { name: 'Default checkbox' })).toBeVisible();
  await expect(page.getByLabel('Dropdown (select) Open this')).toHaveValue('Open this select menu');
  await page.getByRole('textbox', { name: 'Color picker' }).fill('#593d7b');
  await page.getByRole('textbox', { name: 'Text input' }).click();
  await page.getByRole('textbox', { name: 'Text input' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('textbox', { name: 'Textarea' }).click();
  await page.getByRole('textbox', { name: 'Textarea' }).fill('test textarea');
  await page.getByLabel('Dropdown (select) Open this').selectOption('2');
  await page.getByRole('combobox', { name: 'Dropdown (datalist)' }).click();
  await page.getByRole('combobox', { name: 'Dropdown (datalist)' }).fill('Seattle');
  //await page.getByRole('button', { name: 'File input' }).setInputFiles('2026-02-02_18h29_08.png');
  await page.getByRole('button', { name: 'File input' }).setInputFiles('D:\\playWriteJavascript\\jsfiles\\foreach.js');
  //await page.waitForTimeout(10000)
});