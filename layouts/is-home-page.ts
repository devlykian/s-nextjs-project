import { HOME_PAGE } from 'lib/site-navigation'
const arr = [HOME_PAGE]
export function isCategoryPage(pathname) {
  return arr.includes(`/${pathname}`)
}
