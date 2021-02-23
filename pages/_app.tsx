import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'lib/settings/theme/default'
import { AppProvider } from 'contexts/app/app.provider'
import { AuthProvider } from 'contexts/auth/auth.provider'
import { LanguageProvider } from 'contexts/language/language.provider'
import { useMedia } from 'lib/utils/use-media'
import AppLayout from 'layouts/app-layout'
import Router from 'next/router'

import NProgress from 'nprogress'

// External CSS import here
import 'rc-drawer/assets/index.css'
import 'rc-table/assets/index.css'
import 'rc-collapse/assets/index.css'
import 'react-spring-modal/dist/index.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import 'components/scrollbar/scrollbar.css'
import '@redq/reuse-modal/lib/index.css'
import './../layouts/contact-us.css'
import './../layouts/nprogress.css'

import { GlobalStyle } from 'assets/styles/global.style'
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
import { messages } from 'lib/settings/localization/messages'
import 'typeface-lato'
import 'typeface-poppins'
export default function ExtendedApp({ Component, pageProps }) {
  const mobile = useMedia('(max-width: 580px)')
  const tablet = useMedia('(max-width: 991px)')
  const desktop = useMedia('(min-width: 992px)')
  return (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider messages={messages}>
        <AppProvider>
          <AuthProvider>
            <AppLayout>
              <Component
                {...pageProps}
                deviceType={{ mobile, tablet, desktop }}
              />
            </AppLayout>
            <GlobalStyle />
          </AuthProvider>
        </AppProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
