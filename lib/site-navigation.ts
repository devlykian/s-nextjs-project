export const HOME_PAGE = ''

export const CONTACT_PAGE = '/contact'

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE
}

export const CONTACT_MENU_ITEM = {
  id: 'nav.contact',
  defaultMessage: 'Contact',
  href: CONTACT_PAGE
}

export const AUTHORIZED_MENU_ITEMS = [
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: ''
  },
  {
    id: 'nav.privacy_policy',
    defaultMessage: 'Privacy Policy',
    href: ''
  }
]

export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  CONTACT_MENU_ITEM
]

export const PROFILE_SIDEBAR_TOP_MENU = [CONTACT_MENU_ITEM]

export const LANGUAGE_MENU = [
  {
    id: 'tr',
    defaultMessage: 'Turkish',
    icon: 'TRFlag'
  },

  {
    id: 'en',
    defaultMessage: 'English',
    icon: 'USFlag'
  }
]
