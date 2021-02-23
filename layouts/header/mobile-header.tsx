import React from 'react'
import { useRouter } from 'next/router'
import { openModal, closeModal } from '@redq/reuse-modal'
import MobileDrawer from './mobile-drawer'
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper
} from './header.style'
import LogoImage from 'assets/images/logo.svg'

import Logo from 'layouts/logo/logo'
import LanguageSwitcher from './menu/language-switcher/language-switcher'
import useDimensions from 'lib/utils/useComponentSize'

type MobileHeaderProps = {
  className?: string
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
  const { pathname, query } = useRouter()

  const [mobileHeaderRef, dimensions] = useDimensions()

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo imageUrl={LogoImage} alt="shop logo" />
        </LogoWrapper>

        <LanguageSwitcher />
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  )
}

export default MobileHeader
