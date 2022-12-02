import { NavLink } from "react-router-dom"
import { MenuStyle } from "../styles/menu/MenuStyle"
import { LinkMenu } from "../styles/menu/LinkMenu"
import { MdDashboard } from 'react-icons/md'
import { GiSofa } from  'react-icons/gi'
import { MdChecklistRtl } from 'react-icons/md'
import { MdShoppingCart } from 'react-icons/md'


export const Menu = () => {
    return(
        <MenuStyle>
            <nav>
                <ul>
                    <LinkMenu>
                        <NavLink to='/Inicio'><MdDashboard /><p>Início</p></NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to='/Produtos'><GiSofa /><p>Produtos</p></NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to='/Estoque'><MdChecklistRtl /><p>Estoque</p></NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to='/Vendas'><MdShoppingCart /><p>Vendas</p></NavLink>
                    </LinkMenu>
                </ul>
            </nav>
       </MenuStyle>
    )
}