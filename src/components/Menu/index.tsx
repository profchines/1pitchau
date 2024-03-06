import { useEffect, useState } from "react"
import { FaShoppingCart } from 'react-icons/fa'
import {
  LeftContainer,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer
} from "./styles";

interface IDataMenu {
  id: number;
  categoria: string;
}

export const Menu = () => {

  const [extendNavbar, setExtendNavbar] = useState(false);
  const [dataMenu, setDataMenu] = useState<Array<IDataMenu>>([])

  useEffect(() => {
    setDataMenu([
      {
        id: 1,
        categoria: 'Eletronicos'
      },
      {
        id: 2,
        categoria: 'Moveis'
      },
    ])
  }, [])

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((value) => !value)
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>

              <NavbarLinkExtended
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                }}
                to="/"
              >
                1Pitchau
              </NavbarLinkExtended>

              <NavbarLink to={'/'}>Home</NavbarLink>
              {
                dataMenu.map((menu) => {
                  return (
                    <NavbarLink
                      key={menu.id}
                      to={'/categoria/' + menu.id}
                    >
                      {menu.categoria}
                    </NavbarLink>
                  )
                })
              }

            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkExtended
              to="/carrinho"
            >
              <FaShoppingCart
                size={22}
              />
            </NavbarLinkExtended>
          </RightContainer>
        </NavbarInnerContainer>

        {
          extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtended to={'/'}>
                Home
              </NavbarLinkExtended>
            </NavbarExtendedContainer>
          )
        }

      </NavbarContainer>
    </>
  )
}
