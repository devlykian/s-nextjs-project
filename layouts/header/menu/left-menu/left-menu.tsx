import React from 'react'
import Router, { useRouter } from 'next/router'
import Logo from 'layouts/logo/logo'
import NavLink from 'components/nav-link/nav-link'
import { CONTACT_MENU_ITEM } from 'lib/site-navigation'
import { MainMenu, LeftMenuBox } from './left-menu.style'

type Props = {
  logo: string
}

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const router = useRouter()

  return (
    <LeftMenuBox>
      <Logo imageUrl={logo} alt={'Scorp Inc. Members Logo'} />
      <MainMenu>
        <NavLink
          className="menu-item"
          href={CONTACT_MENU_ITEM.href}
          label={CONTACT_MENU_ITEM.defaultMessage}
          intlId={CONTACT_MENU_ITEM.id}
          iconClass="menu-icon"
        />
      </MainMenu>
    </LeftMenuBox>
  )
}
