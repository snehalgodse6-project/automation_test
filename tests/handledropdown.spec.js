const {test,chromium, expect} =require('@playwright/test')

/*test('Handle dropdwon',async({page})=>{
/*     await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')
    const dropdown=await page.locator('select[name="my-select"]')
    const alloptions=await dropdown.locator('option').allInnerTexts()
    console.log(alloptions)
    //get the selectd option
    const selectedvalue=await dropdown.inputValue()
    console.log('Selected value:'+selectedvalue)

    // select the value inside the dropdown
    dropdown.selectOption({label:'Three'})
    await page.waitForTimeout(10000)
    dropdown.selectOption({index:1})
    await page.waitForTimeout(10000)
  
}) */
/*
test('Handle datalist',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')
    const datalist=await page.locator('//input[@placeholder="Type to search..."]').evaluateAll(list=>list.map(e1=>e1.value))
    console.log(datalist)
    await page.locator('//input[@placeholder="Type to search..."]').fill('datalist test')
    await page.waitForTimeout(10000)
})

test('fileupload',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')
   
    await page.locator('//input[@name="my-file"]').setInputFiles('D:\\playWriteJavascript\\jsfiles\\foreach.js')    
    await page.waitForTimeout(10000)
})

test('drag and drop',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html')
   
    const draggable = await page.locator('#draggable')
    const droppable = await page.locator('#target')
    await draggable.dragTo(droppable)
    await page.waitForTimeout(10000)
})

test('slider in range',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')
   
    const slider = await page.locator('input[name="my-range"]')
    const target = 8
    await slider.click()
    for (let i = 0; i < target; i++) {
        await slider.press('ArrowRight')
        await page.waitForTimeout(2000)
    }
   // await page.waitForTimeout(10000)
})

test('highlight slider',async({page})=>{
    await page.goto('https://jqueryui.com/slider/')
    const demoframe=await page.frameLocator('.demo-frame')
    const slider = await demoframe.locator('#slider')
    await expect(slider).toBeVisible()
    //p[contains(text(),'dolor sit amet consectetur adipiscing elit habitan')]
    await page.waitForTimeout(10000)
})

test('highlight slider',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/frames.html')
   // const frame = await page.frameLocator("frame[name='frame-body']")
   
    const paragraph =await page.locator("#content p:nth-child(1)")
    const text = await paragraph.innerText()
    console.log(text)
   
    await page.waitForTimeout(10000)
})

test('Nested frame',async({page})=>{
    await page.goto('https://demoqa.com/nestedframes')
    const frame1 = await page.frameLocator("#frame1")
   
    const text =await frame1.locator("//body").textContent()
    const frame2 =await frame1.frameLocator("//iframe[@srcdoc='<p>Child Iframe</p>']")
    const childtext = await frame2.locator("//p[normalize-space()='Child Iframe']").textContent()
    console.log(text)
    console.log(childtext)
    const text3=await page.locator("//h1[normalize-space()='Nested Frames']").textContent()
    console.log(text3)
    await page.waitForTimeout(10000)
})

test('slider in without target range',async({page})=>{
    await page.goto('https://jqueryui.com/slider/')
    const frame = await page.frameLocator(".demo-frame")
   
    const slider =await frame.locator("//div[@id='slider']")
    
    await page.waitForTimeout(2000)
    await slider.dragTo(slider,{targetPosition:{x:500,y:0}})
    await page.waitForTimeout(10000)
})

test('scroll till the specific element',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    const product = await page.locator("//img[@title='Show details for $25 Virtual Gift Card']")
    await product.scrollIntoViewIfNeeded()
    await page.waitForTimeout(10000)
})

test('scroll bottom of the page',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    await page.evaluate(()=>{
        window.scrollTo(0, document.body.scrollHeight)
    })
    await page.waitForTimeout(10000)
})

test('scroll with mouse wheel',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
   await page.mouse.wheel(0, 4000)
    await page.waitForTimeout(10000)
})*/

test('Infinite scroll',async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html')
    let previousheight=0
    let currentheight=await page.evaluate('document.body.scrollHeight')
    let maxscroll=5
    let scroll=0
    while(previousheight<currentheight && scroll<maxscroll){
        previousheight=currentheight
        await page.evaluate(()=>{
            window.scrollTo(0, document.body.scrollHeight)
        })
        await page.waitForTimeout(2000)
        
        currentheight=await page.evaluate('document.body.scrollHeight')
        scroll++
    }   
    await page.waitForTimeout(10000)
})