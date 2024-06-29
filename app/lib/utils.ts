export const formatPrice = (price: number, currency: string) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  })
}

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * (max + 1))
}

//Function to scrape product decription from a given URL
// export async function scrapeProductInfo(url: string) {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto(url)

//   const info = await page.evaluate(() => {
//     const descElement = document.querySelector(
//       '.pip-product-summary__description',
//     ) as HTMLElement

//     const description = descElement ? descElement.innerText : null
//     return description
//   })

//   await browser.close()
//   return info
// }
