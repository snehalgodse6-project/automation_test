const {expect} =require('@playwright/test')

import {test} from '../fixtures/auth';

/* test('Saucedemo login',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    
}) */
test.beforeAll(async({browser})=>{
    console.log('Before all test cases')
})
test.afterAll(async({browser})=>{
    console.log('After all test cases')
})

test.beforeEach(async({browser})=>{ 
    console.log('Before each test cases')
})

test.afterEach(async({browser})=>{
    console.log('After each test cases')
})

test('Saucedemo Incorrect login',async({loginincorrect})=>{

    await expect(loginincorrect.page).toHaveURL('https://www.saucedemo.com/')
    
})
test('Saucedemo login',async({login})=>{

    await expect(login.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    
})

test('Add to cart test on saucedemo',async({login})=>{
    await login.page.locator('#add-to-cart-sauce-labs-backpack').click()
    await login.page.locator('#shopping_cart_container').click()
    await expect(login.page).toHaveURL('https://www.saucedemo.com/cart.html')

})