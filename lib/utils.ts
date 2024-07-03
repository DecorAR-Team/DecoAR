import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const formatPrice = (price: number, currency: string) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  });
};

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * (max + 1));
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
