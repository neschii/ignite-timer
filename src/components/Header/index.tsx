import { HeaderContainer } from './styles'
<<<<<<< HEAD

import logo from '../../assets/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
=======
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
>>>>>>> ignite-timer

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
