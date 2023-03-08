const { test, expect } = require('@playwright/test');

test('add note', async ({ page }) => {

  const newTodo = page.locator('[placeholder="What needs to be done?"]');
  const todos = ['Watch a Brad Pitt Movie', 'Kidnap Brad Pitt', 'Make Brad Pitt love me'];

  await page.goto('http://127.0.0.1:5500/index.html');

  await newTodo.fill(todos[0]);
  await newTodo.press('Enter');

  await expect(page.locator('li p')).toHaveText(todos[0]);
});

test('1 item - 0 items', async ({ page }) => {

  const newTodo = page.locator('[placeholder="What needs to be done?"]');
  let checkbox = page.locator('#item-checkbox');
  const todos = ['Watch a Brad Pitt Movie', 'Kidnap Brad Pitt', 'Make Brad Pitt love me'];

  await page.goto('http://127.0.0.1:5500/index.html');

  await newTodo.fill(todos[0]);
  await newTodo.press('Enter');

  await expect(page.locator('#counter')).toHaveText('1 item left');

  checkbox = await page.locator('#item-checkbox');
  await checkbox.click();

  await expect(page.locator('#counter')).toHaveText('0 items left');
});

test('remove notes', async ({ page }) => { 

  const newTodo = page.locator('[placeholder="What needs to be done?"]');
  let checkbox = page.locator('#item-checkbox');
  const todos = ['A', 'B', 'C', 'D', 'E', 'F'];

  await page.goto('http://127.0.0.1:5500/index.html');

  await newTodo.fill(todos[0]);
  await newTodo.press('Enter');
  await newTodo.fill(todos[1]);
  await newTodo.press('Enter');
  await newTodo.fill(todos[2]);
  await newTodo.press('Enter');
  await newTodo.fill(todos[3]);
  await newTodo.press('Enter');
  await newTodo.fill(todos[4]);
  await newTodo.press('Enter');
  await newTodo.fill(todos[5]);
  await newTodo.press('Enter');

  await expect(page.locator('#counter')).toHaveText('6 items left');

  //checkbox = await page.locator('#item-checkbox');
  await checkbox.click();

  let deleteButton = document.getElementById('delete');

  deleteButton.click();

  await expect(page.locator('#counter')).toHaveText('0 item left');


});

