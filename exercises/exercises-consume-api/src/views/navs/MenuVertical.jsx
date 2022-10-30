
import { useState } from 'react'
import Styled, { css } from 'styled-components'
import Icon from '@mdi/react'

// Link React
import { Link } from 'react-router-dom'

// Components Base
import Div from '@components/div'
import Ul from '@components/ul'
import Li from '@components/li'
import A from '@components/a'
import Img from '@components/img'
import H4 from '@components/h4'
import H6 from '@components/h6'
import Button from '@components/button'

// Icons
import { mdiHome } from '@mdi/js'

// Utils
import { device } from '@components/assets/utils/divice'
//import { device } from '../../components/assets/utils/device'

// ======================= STYLES =======================

const ImageLogo = Styled(Img)`
    justify-content: center;
    width: 70px;
    height: 61px;
    margin-bottom: 20px;
`

const ImagenHeader = Styled(Img)`
    justify-content: center;
    margin: auto;
    width: 60px;
`

const ButtonDefaultStyles = css`
    font-size: .9rem;
    padding: .5rem 1.5rem;
    border: none;
    border-radius: .2rem;
    cursor: pointer;
    outline: none;
    transition: .2s;

    &:hover {
        background-color: #42A5F5;
        //background-color: rgba(255, 255, 255, .1)
    }
`

const Menu = Styled(Div)`

    display: grid;

    /* =============== DESKTOP =============== */
    @media ${device.desktop} {

        position: fixed;
        align-items: center;
        flex-flow: row wrap;
        padding: .1rem 1rem;

        .nav__logo {
        display: flex;

            & label {
                font-size: 1.2rem;
                color: #fff;
                font-weight: bold;
            }
        }

        .nav__menu {
        display: grid;
        margin-right: 1rem;

            .nav__menu_link {
                text-decoration: none;
                list-style: none;
            }
            
            .nav__menu_li {
                list-style: none;
                margin: 0 .5rem;
                padding: .3rem .5rem;
                border-radius: .3rem;
                cursor: pointer;
                &:hover {
                    background-color: #1E88E5;
                    transition: .3s;
                }
                & a {
                color: #fff;
                text-decoration: none !important;
                cursor: pointer;
                }
            }
      
        }


        .nav__btn {
        ${ButtonDefaultStyles}
        background-color: #E91E63;
        display: none;

            .nav__btn_img_bar {
                width: 12px;
            }

            .nav__btn_img_close {
                width: 12px;
            }
        }
    }
    /* =============== DESKTOP =============== */
    

    /* =============== TABLET =============== */
    @media ${device.tablet} {

    padding: .5rem .8rem;

        .nav__menu {
            margin-right: .5rem;

            .nav__menu_li {
                margin: 0 .3rem;
                padding: .1rem .3rem;
            }

            & a {
                color: #fff;
                text-decoration: none !important;
            }
        }
    }
    /* =============== TABLET =============== */


    /* =============== MOBILE =============== */
    @media ${device.mobileL} {

        .nav__menu {
        display: none;
        }

        .nav__menu_mobile {
            position: absolute;
            display: block;
            list-style: none;
            left: 70px;
            top: 69px;
            width: 80vw;
            background-color: #9E9E9E;
            padding: 1rem;
            margin: 0;

            .nav__menu_link {
                text-decoration: none
            }

            .nav__menu_li {
                list-style: none;
                text-decoration: none !important;
                padding: .5rem .5rem;
                border-radius: .3rem;
                &:hover {
                    background-color: #1E88E5;
                    transition: .3s;
                }
                & a {
                color: #fff;
                text-decoration: none !important;
                }
            }  
        }

        .nav__btn {
            display: inline-flex;
        }
    }
    /* =============== MOBILE =============== */

`

const MenuVertical = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <Menu>

        <Div displayGrid marginT5 jcCenter>
          <FontAwesomeIcon icon={faReact} color='#1E88E5' size='4x' />
        </Div>

        <Div displayGrid marginY4 jcCenter>
          <H4 textWhite jcCenter> MENU </H4>
          <H6 textWhite> REACT HOOKS </H6>
        </Div>

        <Ul className={isMobile ? 'nav__menu_mobile' : 'nav__menu'} onClick={() => setIsMobile(false)}>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='/menu-inicio' className='nav__menu_link'><Li className='nav__menu_li'><A> Menu inicio </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='/api-pokemons' className='nav__menu_link'><Li className='nav__menu_li'><A> API Pokemons </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='/api-rick-morty' className='nav__menu_link'><Li className='nav__menu_li'><A> API rick and morty </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='/contador-horas' className='nav__menu_link'><Li className='nav__menu_li'><A> Contador horas </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='#' className='nav__menu_link'><Li className='nav__menu_li'><A> Todo list basic </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='#' className='nav__menu_link'><Li className='nav__menu_li'><A> Instalar dependencias </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link to='#' className='nav__menu_link'><Li className='nav__menu_li'><A> Crear carpetas </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <Icon src={mdiHome} size={1} color='#A2BD00' />
            <Link href='#' className='nav__menu_link'><Li className='nav__menu_li'><A> Archivos de configuracion </A></Li></Link>
          </Div>

          <Div displayFlex aiCenter marginY1>
            <FontAwesomeIcon icon={faColumns} color='#A2BD00' />
            <Link href='#' className='nav__menu_link'><Li className='nav__menu_li'><A> Iniciar maquetacion </A></Li></Link>
          </Div>

        </Ul>

        <Button className='nav__btn' onClick={() => setIsMobile(!isMobile)}>
          {isMobile
            ? (
              <Img className='nav__btn_img_close' src={faTimes} alt='' />
              )
            : (
              <Img className='nav__btn_img_bar' src={faBars} alt='' />
              )}
        </Button>

      </Menu>
    </>
  )
}

export default MenuVertical
