# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dialogue.spec.js >> Handle calendar event
- Location: tests\dialogue.spec.js:115:6

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 15000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Hands-On Selenium WebDriver with Java" [level=1] [ref=e6]
          - heading "Practice site" [level=5] [ref=e7]
        - link [ref=e9] [cursor=pointer]:
          - /url: https://github.com/bonigarcia/selenium-webdriver-java
      - separator [ref=e13]
      - heading "Web form" [level=1] [ref=e16]
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]:
            - text: Text input
            - textbox "Text input" [ref=e21]
          - generic [ref=e22]:
            - text: Password
            - textbox "Password" [ref=e23]
          - generic [ref=e24]:
            - text: Textarea
            - textbox "Textarea" [ref=e25]
          - generic [ref=e26]:
            - text: Disabled input
            - textbox "Disabled input" [disabled] [ref=e27]
          - generic [ref=e28]:
            - text: Readonly input
            - textbox "Readonly input" [ref=e29]
          - link "Return to index" [ref=e31] [cursor=pointer]:
            - /url: ./index.html
        - generic [ref=e32]:
          - generic [ref=e33]:
            - text: Dropdown (select)
            - combobox "Dropdown (select)" [ref=e34]:
              - option "Open this select menu" [selected]
              - option "One"
              - option "Two"
              - option "Three"
          - generic [ref=e35]:
            - text: Dropdown (datalist)
            - combobox "Dropdown (datalist)" [ref=e36]
          - generic [ref=e37]:
            - text: File input
            - button "File input" [ref=e38] [cursor=pointer]
          - generic [ref=e39]:
            - generic [ref=e40]:
              - checkbox "Checked checkbox" [checked] [ref=e41]
              - text: Checked checkbox
            - generic [ref=e42]:
              - checkbox "Default checkbox" [ref=e43]
              - text: Default checkbox
          - generic [ref=e45]:
            - radio "Checked radio" [checked] [ref=e46]
            - text: Checked radio
          - generic [ref=e48]:
            - radio "Default radio" [ref=e49]
            - text: Default radio
          - button "Submit" [ref=e50] [cursor=pointer]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - text: Color picker
            - textbox "Color picker" [ref=e53] [cursor=pointer]: "#563d7c"
          - generic [ref=e54]:
            - text: Date picker
            - textbox "Date picker" [active] [ref=e55]: 09/24/2026
          - generic [ref=e56]:
            - text: Example range
            - slider "Example range" [ref=e57]: "5"
  - contentinfo [ref=e58]:
    - generic [ref=e60]:
      - text: Copyright © 2021-2026
      - link "Boni García" [ref=e61] [cursor=pointer]:
        - /url: https://bonigarcia.dev/
  - table [ref=e64]:
    - rowgroup [ref=e65]:
      - row
      - row [ref=e66]:
        - columnheader "«" [ref=e67] [cursor=pointer]
        - columnheader "September 2026" [ref=e68] [cursor=pointer]
        - columnheader "»" [ref=e69] [cursor=pointer]
      - row [ref=e70]:
        - columnheader "Su" [ref=e71]
        - columnheader "Mo" [ref=e72]
        - columnheader "Tu" [ref=e73]
        - columnheader "We" [ref=e74]
        - columnheader "Th" [ref=e75]
        - columnheader "Fr" [ref=e76]
        - columnheader "Sa" [ref=e77]
    - rowgroup [ref=e78]:
      - row [ref=e79]:
        - cell "30" [ref=e80]
        - cell "31" [ref=e81]
        - cell "1" [ref=e82]
        - cell "2" [ref=e83]
        - cell "3" [ref=e84]
        - cell "4" [ref=e85]
        - cell "5" [ref=e86]
      - row [ref=e87]:
        - cell "6" [ref=e88]
        - cell "7" [ref=e89]
        - cell "8" [ref=e90]
        - cell "9" [ref=e91]
        - cell "10" [ref=e92]
        - cell "11" [ref=e93]
        - cell "12" [ref=e94]
      - row [ref=e95]:
        - cell "13" [ref=e96]
        - cell "14" [ref=e97]
        - cell "15" [ref=e98]
        - cell "16" [ref=e99]
        - cell "17" [ref=e100]
        - cell "18" [ref=e101]
        - cell "19" [ref=e102]
      - row [ref=e103]:
        - cell "20" [ref=e104]
        - cell "21" [ref=e105]
        - cell "22" [ref=e106]
        - cell "23" [ref=e107]
        - cell "24" [ref=e108]
        - cell "25" [ref=e109]
        - cell "26" [ref=e110]
      - row [ref=e111]:
        - cell "27" [ref=e112]
        - cell "28" [ref=e113]
        - cell "29" [ref=e114]
        - cell "30" [ref=e115]
        - cell "1" [ref=e116]
        - cell "2" [ref=e117]
        - cell "3" [ref=e118]
      - row [ref=e119]:
        - cell "4" [ref=e120]
        - cell "5" [ref=e121]
        - cell "6" [ref=e122]
        - cell "7" [ref=e123]
        - cell "8" [ref=e124]
        - cell "9" [ref=e125]
        - cell "10" [ref=e126]
    - rowgroup:
      - row
      - row
```

# Test source

```ts
  22  |         await page.waitForTimeout(2000)
  23  |         await dialog.accept()
  24  |     })
  25  |    
  26  |     await page.waitForTimeout(10000)
  27  | })
  28  | 
  29  | test('dialogue prompt box',async({page})=>{
  30  |     await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
  31  |     const alertbutton= await page.locator('#my-prompt')
  32  |     alertbutton.click()
  33  |     page.on('dialog',async(dialog)=>{
  34  |         console.log(dialog.message())
  35  |         await page.waitForTimeout(2000)
  36  |         //await dialog.accept('I learned playwright')
  37  |         await dialog.dismiss('Oh No!')
  38  |        
  39  |     })
  40  |     await page.waitForTimeout(10000)
  41  | })
  42  | */
  43  | test('dialogue launch modal',async({page})=>{
  44  |     await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html')
  45  |     const alertbutton= page.locator('#my-modal')
  46  |     alertbutton.click()
  47  |     const closeButton=page.locator("//button[normalize-space()='Close']")
  48  |     closeButton.click()
  49  |     await page.waitForTimeout(2000)
  50  |     alertbutton.click()
  51  |     await page.waitForTimeout(2000)
  52  |     const saveChange=page.locator("//button[contains(text(),'Save')]")
  53  |     saveChange.click()
  54  |     await page.waitForTimeout(10000)
  55  | })
  56  | 
  57  | test('Login Form submit',async({page})=>{// only used when we want to run only this test case and not all the test cases in the file
  58  |     await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html')
  59  |     const username= await page.locator('#username')
  60  |     username.fill('admin')
  61  |     await page.waitForTimeout(2000)
  62  |     const password= await page.locator('#password')
  63  |     password.fill('password')
  64  |     await page.waitForTimeout(2000)
  65  |     page.locator("//button[normalize-space()='Submit']").click()
  66  | 
  67  |     await expect(page.locator("#invalid")).toBeVisible() 
  68  |     const message=await page.locator("#invalid").textContent()
  69  |     console.log(message)
  70  |     //expect(message).toContain('Invalid credentials')
  71  |     expect(message).not.toContain('Invalid credentials!')
  72  |    
  73  |    
  74  |     await page.waitForTimeout(10000)
  75  | })
  76  | 
  77  | test('Navigate page',async({page})=>{
  78  |     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
  79  |     var homepageUrl = await page.url()
  80  |     console.log(homepageUrl)
  81  |     const webPage= await page.locator("//a[normalize-space()='Web form']")
  82  |     await webPage.click()
  83  |     await page.waitForTimeout(2000)
  84  |     const webformUrl = await page.url()
  85  |     console.log(webformUrl)
  86  |     await page.goBack()
  87  |     var homepageUrl1 = await page.url()
  88  |     console.log(homepageUrl1)
  89  |      await page.waitForTimeout(2000)
  90  |     await page.goForward()
  91  |     const webformUrl1 = await page.url()
  92  |     console.log(webformUrl1)
  93  | 
  94  | })
  95  | 
  96  | test('Navigate multiple page',async({page, context})=>{
  97  |     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
  98  |     const webPage= await page.locator("//a[normalize-space()='Web form']")
  99  |     const[newPage]=await Promise.all([
  100 |         context.waitForEvent('page'),
  101 |         
  102 |         webPage.click({modifiers:['Control']})// to open in new tab
  103 |     ])
  104 |     await newPage.waitForLoadState()
  105 |     const webformUrl = await newPage.url()
  106 |     console.log(webformUrl)
  107 |     await page.waitForTimeout(3000)
  108 |     const input=await newPage.locator('#my-text-id')
  109 |     await input.fill('Snehal')  
  110 |     await newPage.waitForTimeout(3000)
  111 |     await page.close()
  112 |     await page.waitForTimeout(3000)
  113 | })
  114 | 
  115 | test.only('Handle calendar event',async({page, context})=>{
  116 |     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
  117 |     const calendar=  page.locator("//input[@name='my-date']")
  118 |     await calendar.screenshot({path:'calendar.png',fullPage:true})
  119 |     await calendar.click()
  120 |     await calendar.type('09/24/2026')
  121 |     
> 122 |     await page.waitForTimeout(3000)
      |                ^ Error: page.waitForTimeout: Test timeout of 15000ms exceeded.
  123 | 
  124 | })
  125 | 
  126 | 
  127 | 
  128 | test('test handle', async ({ page }) => {
  129 |   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
  130 |   await page.getByRole('textbox', { name: 'Text input' }).click();
  131 |   await page.getByRole('textbox', { name: 'Text input' }).click();
  132 |   await page.getByRole('textbox', { name: 'Text input' }).fill('tesst');
  133 |   await page.getByRole('textbox', { name: 'Password' }).click();
  134 |   await page.getByRole('textbox', { name: 'Password' }).fill('test');
  135 |   await page.getByRole('textbox', { name: 'Readonly input' }).click();
  136 |   await page.getByLabel('Dropdown (select) Open this').selectOption('1');
  137 |   await page.getByRole('textbox', { name: 'Date picker' }).click();
  138 |   await page.getByRole('cell', { name: '29' }).click();
  139 | });
  140 | 
  141 | 
  142 | 
  143 | 
  144 | test('test again', async ({ page }) => {
  145 |   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
  146 |   await expect(page.getByRole('checkbox', { name: 'Default checkbox' })).toBeVisible();
  147 |   await expect(page.getByLabel('Dropdown (select) Open this')).toHaveValue('Open this select menu');
  148 |   await page.getByRole('textbox', { name: 'Color picker' }).fill('#593d7b');
  149 |   await page.getByRole('textbox', { name: 'Text input' }).click();
  150 |   await page.getByRole('textbox', { name: 'Text input' }).fill('test');
  151 |   await page.getByRole('textbox', { name: 'Password' }).click();
  152 |   await page.getByRole('textbox', { name: 'Password' }).fill('test');
  153 |   await page.getByRole('textbox', { name: 'Textarea' }).click();
  154 |   await page.getByRole('textbox', { name: 'Textarea' }).fill('test textarea');
  155 |   await page.getByLabel('Dropdown (select) Open this').selectOption('2');
  156 |   await page.getByRole('combobox', { name: 'Dropdown (datalist)' }).click();
  157 |   await page.getByRole('combobox', { name: 'Dropdown (datalist)' }).fill('Seattle');
  158 |   //await page.getByRole('button', { name: 'File input' }).setInputFiles('2026-02-02_18h29_08.png');
  159 |   await page.getByRole('button', { name: 'File input' }).setInputFiles('D:\\playWriteJavascript\\jsfiles\\foreach.js');
  160 |   //await page.waitForTimeout(10000)
  161 | });
```