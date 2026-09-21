const {test, expect} =require('@playwright/test')
/* test('first playwright test to launch url',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://www.google.com/')
}) */

/* test('first playwright test to launch url',async({page})=>{
   
    await page.goto('https://www.google.com/')
}) */
test('first playwright test to launch url',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')
    const title= await page.title()
    console.log(title)
    await expect(title).toContain('Selenium')
    //const url=await page.url()
    //console.log(url)
    await page.locator('#my-text-id').fill('Snehal')
    //handle checkbox
    /* const check2=await page.locator('#my-check-2')
    await check2.check() */
// select all checkboxes
    const allcheck=await page.locator('input[name="my-check"]').all()
    for(const check of allcheck){
        const ischecked=await check.isChecked()
        if(!ischecked){
            await check.check()
        }
    } 
    //check if the input ox is disabled or not   
    const isdisabled=await page.locator('input[name="my-disabled"]')
    console.log(await isdisabled.isDisabled())
    expect(isdisabled).toBeDisabled()

    await page.waitForTimeout(10000)
  });
