const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://yourusername.github.io/resume/', {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '1cm', bottom: '1cm' }
  });
  await browser.close();
})();
