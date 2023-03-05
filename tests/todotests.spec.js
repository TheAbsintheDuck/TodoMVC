const { test, expect } = require('@playwright/test');

const newTodo = page.getByPlaceholder('What needs to be done?');

const todos = [
    'Watch a Brad Pitt Movie',
    'Kidnap Brad Pitt',
    'Make Brad Pitt love me'
];

test('add note', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    await newTodo.fill(todos[0]);
    await newTodo.press('Enter');

    await expect(page.locator('li p')).toHaveText(todos[0]);

});

test('1 item', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    await newTodo.fill(todos[0]);
    await newTodo.press('Enter');

    await expect(page.locator('counter')).toHaveText("1 item left");

});