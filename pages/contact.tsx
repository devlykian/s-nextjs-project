import React from 'react'
import styled from 'styled-components'
import { SEO } from 'components/seo'
import { Modal } from '@redq/reuse-modal'

import Footer from 'layouts/footer'
import ContactUs from 'layouts/contact-us-layout'

const Wrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 130px 0 60px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`
export const Container = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`
export default function Contact() {
  return (
    <Modal>
      <Wrapper>
        <SEO
          title="Scorp Members | Contact Us"
          description="Contact page of Scorp Members"
        />
        <Container>
          <ContactUs />
        </Container>
        <Footer />
      </Wrapper>
    </Modal>
  )
}
