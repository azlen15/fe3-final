import React from 'react'
import { Context } from './utils/global.context'

const Footer = () => {

  const {themeState} = Context()

  return (
    <footer className={themeState.theme}>
        <img src="./images/DH.png" alt='DH-logo' />
        <div className='redes'>
          <img src='./images/ico-facebook.png' alt='facebook'></img>
          <img src='./images/ico-instagram.png' alt='instagram'></img>
          <img src='./images/ico-whatsapp.png' alt='whatsapp'></img>
          <img src='./images/ico-tiktok.png' alt='tiktok'></img>

        </div>
    </footer>
  )
}

export default Footer
