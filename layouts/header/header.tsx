import React from 'react'
import Router, { useRouter } from 'next/router'
import { openModal } from '@redq/reuse-modal'
import { AuthContext } from 'contexts/auth/auth.context'
import AuthenticationForm from 'lib/authentication-form'
import { RightMenu } from './menu/right-menu/right-menu'
import { LeftMenu } from './menu/left-menu/left-menu'
import HeaderWrapper from './header.style'
import LogoImage from 'assets/images/logo.svg'
import UserImage from 'assets/images/user.jpg'
type Props = {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  const {
    authState: { isAuthenticated },
    authDispatch
  } = React.useContext<any>(AuthContext)
  const { pathname, query } = useRouter()
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token')
      authDispatch({ type: 'SIGN_OUT' })
      Router.push('/')
    }
  }

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN'
    })

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    })
  }

  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  )
}

export default Header
