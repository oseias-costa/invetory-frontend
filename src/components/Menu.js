import { NavLink } from "react-router-dom"
import { MenuStyle } from "../styles/menu/MenuStyle"
import logo from '../styles/menu/icons/logo-menu.png'
import { LinkMenu } from "../styles/menu/LinkMenu"
import { MdDashboard } from 'react-icons/md'
import { GiSofa } from  'react-icons/gi'
import { MdChecklistRtl } from 'react-icons/md'
import { MdShoppingCart } from 'react-icons/md'


export const Menu = () => {
    return(
        <MenuStyle>
            <img src={logo} />
            <span>Menu</span>
            <nav>
                <ul>
                    <LinkMenu>
                        <NavLink to='/Inicio'><MdDashboard />Início</NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to='/Produtos'><GiSofa />Produtos</NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to='/Estoque'><MdChecklistRtl />Estoque</NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to='/Vendas'><MdShoppingCart />Vendas</NavLink>
                    </LinkMenu>
                </ul>
            </nav>
       </MenuStyle>
    )
}