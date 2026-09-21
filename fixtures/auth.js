import {test as base}  from '@playwright/test';
import dotenv  from 'dotenv';
dotenv.config();
//const baseurl=process.env.saucelab_base_url;
const {saucelab_base_url,saucelab_username,saucelab_password}=process.env;
//fixture
export const test = base.extend({
    login: async ({ page }, use) => {
        await page.goto(saucelab_base_url);  
        await page.locator('#user-name').fill(saucelab_username);
        await page.locator('#password').fill(saucelab_password);
        await page.locator('#login-button').click();
        await use({page});
    },

    loginincorrect: async ({ page }, use) => {
        await page.goto('https://www.saucedemo.com/');  
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce1');
        await page.locator('#login-button').click();
        await use({page});
    }
});

