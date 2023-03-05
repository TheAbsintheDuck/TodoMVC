const { test, expect } = require('@playwright/test');

test('add note', async ({page})=> {
    await page.goto('http://127.0.0.1:5500/index.html');
  
    const note = "Watch a Brad Pitt-movie";
  
    const newTodo = page.getByPlaceholder('What needs to be done?');
  
    await newTodo.fill(note);
    await newTodo.press('Enter');
  
    await expect(page.locator('li p')).toHaveText(note);
  
  });

  test('1 item - 0 items', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    
  })
  