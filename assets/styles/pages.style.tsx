import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: ${themeGet('colors.gray.300', '#f4f4f4')};
`

const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;

  @media (max-width: 990px) {
    background-color: ${themeGet('colors.white', '#ffffff')};
  }
`

const SidebarSection = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  width: 280px;

  @media (max-width: 990px) {
    display: none;
  }
`

const ContentSection = styled.div`
  width: calc(100% - 280px);
  height: auto;
  min-height: 100vh;
  padding: 30px 30px 50px;

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
    padding: 0px 0px 100px;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`

const Heading = styled.h2`
  font-size: ${themeGet('fontSizes.xl', '24')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid ${themeGet('colors.primary.regular', '#009e7f')};
  width: auto;
  display: inline-block;
`

export {
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  Heading
}
